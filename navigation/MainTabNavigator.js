import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

import ListenNow from '../screens/ListenNowScreen';
import Radio from '../screens/RadioScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SearchScreen from '../screens/SearchScreen';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#CD3C44',
      tabBarInactiveTintColor: '#999797',
    }}>
      <Tab.Screen
        name='Listen Now'
        component={ListenNow}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="play" size={25} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
      <Tab.Screen
        name='Radio'
        component={Radio}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="radio" size={25} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
      <Tab.Screen
        name='Library'
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="library-music" size={25} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-search" size={25} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({})