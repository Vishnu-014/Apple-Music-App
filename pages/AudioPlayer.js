import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  const onPlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status);
    if (status.isLoaded && !status.isPlaying && status.durationMillis === status.positionMillis) {
      setIsPlaying(false);
      console.log('Audio has finished playing');
    }
  };

  async function playSound() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/m.mp3'));
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSound(sound);
    //console.log(sound._onPlaybackStatusUpdate);
  }

  const play = async () => {
    console.log('Playing Sound');
    await sound.playAsync();
  }
  const pause = async () => {
    console.log('Pause Sound');
    await sound.pauseAsync();
  }

  React.useEffect(() => {
    playSound();
  }, []);

  return (
    <View >
      <Button title="Play Sound" onPress={play} />
      <Button title="Play Sound" onPress={pause} />
    </View>
  );
}
