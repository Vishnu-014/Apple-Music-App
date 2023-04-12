import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import LibraryCategory from '../components/Library/LibraryCategory';
import LibraryAlbums from '../components/Library/LibraryAlbums';
import BottomMusicPlay from '../components/MusicPlay/BottomMusicPlay';
import { useNavigation, useRoute } from '@react-navigation/native';

const musics = [
  {
    id: 1,
    songsName: [{ songName: 'Veyvon Silli', singer: 'Harsh Sivaramakrishnan' }, { songName: 'Kaattu Payale', singer: 'Dhee' }],
    artist: 'G. V. Prakash Kumar',
    imageUrl: 'https://gumlet.assettype.com/swarajya/2020-11/3ad8ec93-097f-4fd6-94b1-671d4c532895/soo.jpg',
    album: 'Soorarai Pottru',
  },
  {
    id: 2,
    songsName: [{ songName: 'Veyvon Silli', singer: 'Harsh Sivaramakrishnan' }],
    artist: 'Harris Jayaraj',
    imageUrl: 'https://c.saavncdn.com/653/KO-Tamil-2011-20190731134123-500x500.jpg',
    album: 'Ko',
  },
  {
    id: 3,
    songsName: [{ songName: 'Veyvon Silli', singer: 'Harsh Sivaramakrishnan' }, { songName: 'Kaattu Payale', singer: 'Dhee' }],
    artist: 'Harris Jayaraj',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a92381244276bb228861a4b4',
    album: '7aum Arivu',
  },
  {
    id: 4,
    songsName: [{ songName: 'Veyvon Silli', singer: 'Harsh Sivaramakrishnan' }, { songName: 'Kaattu Payale', singer: 'Dhee' }],
    artist: 'Harris Jayaraj',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a8cf50e328dbcd0907635219',
    album: 'Thuppaki',
  },
  {
    id: 4,
    songsName: [{ songName: 'Veyvon Silli', singer: 'Harsh Sivaramakrishnan' }, { songName: 'Kaattu Payale', singer: 'Dhee' }],
    artist: 'Harris Jayaraj',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733400267d036e5577446bdaf6',
    album: 'Engayum Kadhal',
  },
]

const LibraryScreen = () => {

  const navigation = useNavigation();

  const scrollY = new Animated.Value(0);
  const [scroll, setScroll] = useState(scrollY)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: scroll > 4.5 ? "Library" : ''
    })
  }, [scrollY])

  return (
    <>
      <ScrollView style={{ backgroundColor: '#fff' }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
          console.log(e.nativeEvent.contentOffset.y);
          setScroll(e.nativeEvent.contentOffset.y);
        }}
      >
        <View style={styles.rootContainer}>

          <View style={styles.topContainer}>
            <Text style={styles.title}>Library</Text>
            <LibraryCategory categoryText="Playlists" icon="MaterialCommunityIcons" iconName="playlist-music" iconSize='26' iconColor="#CD3C44" />
            <LibraryCategory categoryText="Artists" icon="Entypo" iconName="modern-mic" iconSize='24' iconColor="#CD3C44" />
            <LibraryCategory categoryText="Albums" icon="Ionicons" iconName="ios-albums-outline" iconSize='24' iconColor="#CD3C44" />
            <LibraryCategory categoryText="Songs" icon="Ionicons" iconName="ios-musical-note-sharp" iconSize='24' iconColor="#CD3C44" />
            <LibraryCategory categoryText="Downloaded" icon="MaterialCommunityIcons" iconName="download-circle-outline" iconSize='24' iconColor="#CD3C44" />
          </View>



          <View style={styles.bottomContainer}>
            <Text style={styles.subTitle}>Recently Added</Text>
            <LibraryAlbums musics={musics} />
          </View>
        </View>
      </ScrollView>
      <BottomMusicPlay musics={musics} />
    </>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topContainer: {
    //backgroundColor: 'grey',
    flex: 1.2,
    margin: 20,
    marginRight: 0
  },
  bottomContainer: {
    //backgroundColor: 'orange',
    flex: 2,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 33,
    letterSpacing: 0.9
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0.7
  },
})