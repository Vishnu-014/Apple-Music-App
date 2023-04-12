import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Entypo, Ionicons, createIconSet } from '@expo/vector-icons';

const LibraryCategory = (props) => {
  const { icon, iconName, iconSize, iconColor, categoryText, onPress } = props;

  let CustomIcon;
  if (icon === 'MaterialCommunityIcons') {
    CustomIcon = MaterialCommunityIcons;
  } else if (icon === 'Entypo') {
    CustomIcon = Entypo
  } else if (icon === 'Ionicons') {
    CustomIcon = Ionicons
  }
  return (
    <View>
      <Pressable onPress={onPress} style={styles.categories}>
        <CustomIcon name={iconName} size={+iconSize} color={iconColor} />
        <Text style={styles.categoryText}>{categoryText}</Text>
        <View style={styles.categoryArrow} >
          <MaterialCommunityIcons name='greater-than' size={20} color='lightgrey' />
        </View>
      </Pressable>
      <View style={styles.line} />
    </View>
  )
}

export default LibraryCategory

const styles = StyleSheet.create({
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