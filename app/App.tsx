import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { scale } from '../lib/Size';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.pictureWrapper}>
          <Ionicons name="camera" size={scale(40)} color="black" />
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: scale(100),
    height: scale(100),
    borderRadius: 9999,
    backgroundColor: '#ccc'
  }
});
