import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { ColorStyle } from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const music = {
  id: 1,
  songName: 'Veyvon Silli',
  artist: 'G. V. Prakash Kumar',
  imageUrl: 'https://gumlet.assettype.com/swarajya/2020-11/3ad8ec93-097f-4fd6-94b1-671d4c532895/soo.jpg',
  album: 'Soorarai Pottru',
}

const BottomMusicPlay = ({ onPress }) => {
  const navigation = useNavigation();

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  const onPlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status);
    if (status.isLoaded && !status.isPlaying && status.durationMillis === status.positionMillis) {
      setIsPlaying(false);
      console.log('Audio has finished playing');
      playSound();
    }
  };

  async function playSound() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/VeyyonSilli.mp3'));
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSound(sound);
    //console.log(sound._onPlaybackStatusUpdate);
  }

  const play = async () => {
    console.log('Playing Sound');
    await sound.playAsync();
    setIsPlaying(true)
  }
  const pause = async () => {
    console.log('Pause Sound');
    await sound.pauseAsync();
    setIsPlaying(false)
  }

  React.useEffect(() => {
    playSound();
  }, []);

  return (

    <Pressable onPress={() => navigation.navigate('FullMusicPlay', { ...music })} style={styles.root}>
      <Image style={styles.image} source={{ uri: music.imageUrl }} />
      <Text style={styles.title}>{music.songName}</Text>
      <View style={styles.icons}>
        {/* <Ionicons style={styles.icon} name={"ios-play"} size={30} color="black" onPress={isPlaying ? pauseAudio : playSound} /> */}
        {
          isPlaying ? (<Ionicons style={styles.icon} name={"ios-pause-sharp"} size={32} color="black" onPress={pause} />) : <Ionicons style={styles.icon} name={"ios-play"} size={30} color="black" onPress={play} />
        }
        <AntDesign style={styles.icon1} name="forward" size={27} color="black" />
      </View>
    </Pressable>
  )
}

{/* <Ionicons name="ios-play" size={24} color="black" /> 
<Ionicons name="ios-pause-sharp" size={24} color="black" />
{isPlaying ? "ios-play" : "ios-pause-sharp"}
*/}

export default BottomMusicPlay

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    height: 63,
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 30,
    marginVertical: 6,
    borderRadius: 7,
  },
  title: {
    paddingLeft: 10,
    fontSize: 22,
  },
  icons: {
    //backgroundColor: '#fff',
    flexDirection: 'row',
    //alignSelf: 'flex-end',
    flex: 1,
  },
  icon: {
    marginLeft: 120,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 17
  },
  icon1: {
    marginTop: 3,
  }
})