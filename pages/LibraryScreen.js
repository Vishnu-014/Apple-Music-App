
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

const musics = [
  {
    songName: 'Soorarai Pottru',
    artist: 'GV. Prakash Kumar',
    imageUrl: 'https://gumlet.assettype.com/swarajya/2020-11/3ad8ec93-097f-4fd6-94b1-671d4c532895/soo.jpg',
  }
]

const LibraryScreen = () => {

  return (
    <View style={styles.rootContainer}>

      <View style={styles.topContainer}>

        <Text style={styles.title}>Library</Text>
        <View style={styles.categories}>
          <MaterialCommunityIcons name='playlist-music' size={26} color='#CD3C44' />
          <Text style={styles.categoryText}>Playlists</Text>
          <View style={styles.categoryArrow} >
            <MaterialCommunityIcons name='greater-than' size={20} color='lightgrey' />
          </View>
        </View>
        <View style={styles.line} />

        <View style={styles.categories}>
          <Entypo name='modern-mic' size={24} color='#CD3C44' />
          <Text style={styles.categoryText}>Artists</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.categories}>
          <Ionicons name='ios-albums-outline' size={24} color='#CD3C44' />
          <Text style={styles.categoryText}>Albums</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.categories}>
          <Ionicons name='ios-musical-note-sharp' size={24} color='#CD3C44' />
          <Text style={styles.categoryText}>Songs</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.categories}>
          <MaterialCommunityIcons name='download-circle-outline' size={24} color='#CD3C44' />
          <Text style={styles.categoryText}>Downloaded</Text>
        </View>
        <View style={styles.line} />
      </View>



      <View style={styles.bottomContainer}>
        <Text>Recently Added pages</Text>
      </View>
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    flex: 1.2,
    margin: 20,
    marginRight: 0
  },
  bottomContainer: {
    backgroundColor: 'yellow',
    flex: 2,
  },
  title: {

    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 0.9
  },
  categories: {
    flexDirection: 'row',
    marginTop: 10,
    //backgroundColor: 'red',
  },
  categoryText: {
    fontSize: 22,
    paddingTop: 2,
    paddingLeft: 5,
    marginBottom: 7
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    //flexDirection: 'row',
    marginLeft: 32,
    marginTop: 7,
  },
  categoryArrow: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'flex-end',
    marginRight: 10,
    justifyContent: 'center'
  }
})