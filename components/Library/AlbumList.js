import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AlbumScreen from '../../screens/AlbumScreen'
import { useNavigation } from '@react-navigation/native'

const AlbumList = ({ music, index }) => {

  const navigation = useNavigation()
  //console.log(music.songsName);

  return (
    <Pressable
      onPress={() => navigation.navigate('AlbumScreen',
        { id: music.id, songsName: [...music.songsName], artist: music.artist, imageUrl: music.imageUrl, album: music.album }
      )
      }
      style={styles.con}
    >
      <View style={[styles.con, index % 2 === 0 ? { alignItems: 'flex-start' } : { alignItems: 'flex-end' }]}>
        <Image style={styles.image} source={{ uri: music.imageUrl }} />
      </View>
      <Text style={[styles.title, index % 2 === 0 ? {} : { paddingLeft: 13 }]}>{music.album}</Text>
      <Text style={[styles.ArtistTitle, index % 2 === 0 ? {} : { paddingLeft: 13 }]}>{music.artist}</Text>
    </Pressable>
  )
}

export default AlbumList

const styles = StyleSheet.create({
  con: {
    flex: 1,
    //backgroundColor: 'yellow',
    //marginRight: 20,
    //marginTop: 5,
    //padding:5,
    marginVertical: 5,
    //alignSelf: 'flex-end'
  },
  image: {
    height: 175,
    width: 175,
    borderRadius: 10,
  },
  title: {
    alignItems: 'flex-start',
    letterSpacing: 0.4,
  },
  ArtistTitle: {
    paddingTop: 3,
    color: 'grey'
  }
})