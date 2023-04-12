import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ColorStyle } from '../constant/Color'
import { Entypo, Ionicons } from '@expo/vector-icons';
import AlbumButton from '../components/Library/AlbumButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const AlbumScreen = () => {
  const route = useRoute();
  const { imageUrl, album, artist, songsName } = route.params;
  //console.log(route.params.songsName.length);
  const songsLength = route.params.songsName.length;
  return (
    <View style={styles.root}>

      <View style={styles.topContainer}>
        <View style={styles.img}><Image source={{ uri: imageUrl }} style={styles.image} /></View>
        <Text style={styles.albumText}>{album}</Text>
        <Text style={styles.artistText}>{artist}</Text>
        <Text style={styles.year}>Soundtrack • 2020</Text>
      </View>


      <View style={styles.bottomContainer}>
        <AlbumButton />
        <View style={styles.songsList}>
          <View style={styles.line} />
          <View style={styles.songs}>
            {songsName.map((item, index) => {
              return <View key={`${item.songName}${item.singer}`} style={styles.mapRoot}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{}}>{index + 1}</Text>
                </View>

                <View style={styles.song}>
                  <Text style={styles.songNameText}>{item.songName}</Text>
                  <Text style={styles.singerNameText}>{item.singer}</Text>
                  {index !== songsLength - 1 && (<View style={styles.smallline} />)}
                </View>

                <View style={{ justifyContent: 'center', marginBottom: 10, marginHorizontal: 5 }}>
                  <MaterialCommunityIcons name="download-circle" size={21} color={ColorStyle.colors.secondary} />
                </View>
                <View style={{ justifyContent: 'center', marginBottom: 10, marginHorizontal: 5 }}>
                  <Entypo name="dots-three-horizontal" size={15} color="black" />
                </View>


              </View>
            })}
            <View style={styles.line} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1.1,
    //backgroundColor: 'orange',
    //alignItems: 'center',
  },
  image: {
    height: 280,
    width: 280,
    borderRadius: 15,
  },
  img: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15
  },
  albumText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 14,
    letterSpacing: 0.3
  },
  artistText: {
    color: ColorStyle.colors.primary,
    fontSize: 21,
    paddingTop: 3,
    letterSpacing: 0.6,
  },
  year: {
    color: ColorStyle.colors.secondary,
    fontSize: 12,
    paddingTop: 4,
    fontWeight: 'bold',
  },
  line: {
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  smallline: {
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 5,
    // width: '100%',
    // flex: 1,
  },
  songsList: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16
  },
  songs: {
    flex: 1,
    backgroundColor: '#fff'
  },
  song: {
    flex: 1,
    backgroundColor: 'white',
    //marginVertical: 0,
    paddingVertical: 2,
    marginLeft: 40,
  },
  songNameText: {
    fontSize: 20
  },
  singerNameText: {
    fontSize: 14,
    color: ColorStyle.colors.secondary,
    paddingTop: 2,
    paddingBottom: 12
  },
  mapRoot: {
    //flex:1,
    flexDirection: 'row',
    //backgroundColor: '#fff',
    marginLeft: 0
  }
})