import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width])

  return (
    <>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;

          setWidth(newWidth);
        }}
        style={{

          height: 8,
          backgroundColor: '#918265',
          opacity: 0.4,
          borderRadius: height,
          overflow: 'hidden'
        }}>
        <Animated.View style={{
          height: 8,
          width: '100%',
          borderRadius: height,
          backgroundColor: '#D6C9AC',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: [{
            translateX: animatedValue
          }]
        }} />
      </View>
    </>
  )
}

const ProgressBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1))
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [index])

  return (
    <View>
      <Progress step={1} steps={10} height={20} />
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})