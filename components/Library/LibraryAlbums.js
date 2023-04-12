import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlbumList from './AlbumList';

const LibraryAlbums = ({ musics }) => {
  console.log(musics);
  return (
    <FlatList
      style={styles.container}
      data={musics}
      numColumns={2}
      scrollEnabled={false}
      renderItem={({ item, index }) => <AlbumList music={item} index={index} />}
      ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
    />
  )
}

export default LibraryAlbums

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightgrey',
    //margin: 10,
    //justifyContent: 'space-between',
    //alignItems: 'baseline',
    paddingRight: 0,
    //alignSelf: 'flex-end',
  },
})