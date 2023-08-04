import React, { useEffect } from 'react';
import { useAudioPlayer } from './AudiioPlayerContext';
import supabase from '../supabase'; // Import the Supabase client
import { useAuth } from '../Auth';

const AudioPlayer = ({ audioSource }) => {
  const { isAudioVisible, setIsAudioVisible, currentEpisode, episodeId } = useAudioPlayer();
  const audioRef = React.createRef();
  const auth = useAuth();

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

  const saveProgress = async () => {
    if (!currentEpisode) return;

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
