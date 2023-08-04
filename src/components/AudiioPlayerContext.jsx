// AudioPlayerContext.js
import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}

export function AudioPlayerProvider({ children }) {
  const [isAudioVisible, setIsAudioVisible] = useState(false);

  return (
    <AudioPlayerContext.Provider value={{ isAudioVisible, setIsAudioVisible }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}
