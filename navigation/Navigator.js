import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator';
import AlbumScreen from '../screens/AlbumScreen';
import FullMusicPlay from '../components/MusicPlay/FullMusicPlay.js'
import { MaterialCommunityIcons, Entypo, Ionicons, createIconSet } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "red",

      }}>
        <Stack.Screen name='Main' component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='AlbumScreen' component={AlbumScreen} />
        <Stack.Screen name='FullMusicPlay' component={FullMusicPlay} options={{
          presentation: 'modal',
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})