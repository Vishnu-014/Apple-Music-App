import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import { Entypo, AntDesign } from '@expo/vector-icons';

const FullMusicPlay = () => {

  const route = useRoute();

  console.log(route.params);
  const { imageUrl, songName, artist, album } = route.params

  return (
    <View style={styles.rootContainer}>
      {/* <ImageBackground style={styles.imgContainer} source={{ uri: imageUrl }}
        blurRadius={100}
        resizeMode='cover'
      > */}
      <LinearGradient
        style={styles.imgContainer}
        colors={['#A66233', '#62543C']}
      >
        <View style={styles.topContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: imageUrl }} />
          </View>
        </View>

        <View style={styles.bottomContainer}>

          <View style={{ flexDirection: 'row', flex: 0.2 }}>
            <View style={{}}>
              <Text style={{ color: '#F7F5F3', fontSize: 27, fontWeight: '700' }}>{songName}</Text>
              <Text style={{ color: '#F0D4AF', fontSize: 18, fontWeight: '500', marginTop: 6 }}>{artist}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, marginTop: 14 }}>
              <View style={{ backgroundColor: '#976F46', opacity: 0.5, borderRadius: 15, width: 30, height: 30, paddingLeft: 3, paddingTop: 2, }}>
                <Entypo name="dots-three-horizontal" size={24} color="#fff" />
              </View>
            </View>
          </View>

          <View style={styles.progressBar}>
            <ProgressBar />
          </View>

          <View style={styles.buttons}>
            <AntDesign style={styles.icon} name="banckward" size={37} color="#fff" />
            <Entypo style={styles.icon1} name="controller-play" size={55} color="white" />
            <AntDesign style={styles.icon2} name="forward" size={37} color="white" />
          </View>

          <View style={styles.volume}>
            <ProgressBar />
          </View>
        </View>
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  )
}

export default FullMusicPlay

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  imgContainer: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topContainer: {
    flex: 1,
    //backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    //backgroundColor: 'orange',
    margin: 30,
  },
  imgContainer: {
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  progressBar: {
    flex: 0.2,
    //backgroundColor: 'tomato',
    marginTop: 19,
  },
  buttons: {
    flex: 0.2,
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 50
  },
  icon2: {
    marginLeft: 50
  },
  volume: {
    flex: 0.1,
    //flexDirection: 'row',
    marginTop: 29,
    marginHorizontal: 29,
    //backgroundColor: 'lightblue',
  }
})