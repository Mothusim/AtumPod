
// AudiioPlayerContext.js
import { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isAudioVisible, setIsAudioVisible] = useState(false);
  const [episodeId, setEpisodeId] = useState(null); // Add the episodeId state and the setEpisodeId function

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        setCurrentEpisode,
        isAudioVisible,
        setIsAudioVisible,
        
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  return useContext(AudioPlayerContext);
};
