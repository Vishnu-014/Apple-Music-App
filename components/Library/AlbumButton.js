import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorStyle } from '../../constant/Color'
import { Entypo, Ionicons } from '@expo/vector-icons';

const AlbumButton = () => {
  return (
    <View>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <View style={styles.btnInner}>
            <Entypo name="controller-play" size={24} color={ColorStyle.colors.primaryText} />
            <Text style={styles.btnText}>Play</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <View style={styles.btnInner}>
            <Ionicons name="ios-shuffle" size={24} color={ColorStyle.colors.primaryText} />
            <Text style={styles.btnText}>Shuffle</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AlbumButton

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    //backgroundColor: 'pink',
    //flex: 0.3,
    justifyContent: 'space-evenly',

  },
  btn: {
    backgroundColor: ColorStyle.colors.secondary100,
    height: 45,
    width: 179,
    margin: 15,
    borderRadius: 12,
    //flex: 1,

  },
  btnInner: {
    backgroundColor: ColorStyle.colors.secondary100,
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
  },
  btnText: {
    color: ColorStyle.colors.primaryText,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 3
  }
})