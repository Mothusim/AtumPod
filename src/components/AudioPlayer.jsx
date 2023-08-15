import { useEffect, useRef, useState } from 'react';
import { useAudioPlayer } from './AudiioPlayerContext';
import supabase from '../supabase';
import { useAuth } from '../Auth';

const AudioPlayer = ({ audioSource, episodeId }) => {
  const { isAudioVisible, setIsAudioVisible, currentEpisode } = useAudioPlayer();
  const audioRef = useRef();
  const auth = useAuth();

  const [currentEpisodeInfo, setCurrentEpisodeInfo] = useState(null);

  useEffect(() => {

    if (isAudioVisible) {

      audioRef.current.play();

      const handleBeforeUnload = (e) => {

        e.preventDefault();
        e.returnValue = '';
        saveProgress();

      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {

        window.removeEventListener('beforeunload', handleBeforeUnload);

      };
    } else {

      audioRef.current.pause();
    }
  }, [isAudioVisible]);

  useEffect(() => {
    
    setCurrentEpisodeInfo(currentEpisode);
  }, [currentEpisode]);

  const saveProgress = async () => {
    
    if (currentEpisodeInfo) return;

    try {

      const progress = Math.floor(audioRef.current.currentTime);
      const isCompleted = audioRef.current.currentTime === audioRef.current.duration;
      const { data, error } = await supabase.from('history').upsert({
        user_id: auth.user.id,
        episode_id: episodeId, 
        timestamp: progress,
        is_completed: isCompleted,
      });

      if (error) {

        console.error('Error saving progress:', error.message);
      } else {

        console.log('Progress saved:', data);
      }
    } catch (error) {

      console.error('Error saving progress:', error.message);
    }
  };

  const handleClose = () => {
    setIsAudioVisible(false);
    saveProgress();
  };

  return (
    <div className={`audio-player ${isAudioVisible ? 'visible' : ''}`}>
      <audio ref={audioRef} src={audioSource} autoPlay={false} controls />
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default AudioPlayer;
