import React, { useState } from 'react';
import {
  ImageBackground,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { scale } from '../lib/Size';

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      });

      console.log(result);

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <PictureView uri={imageUri}>
          <Ionicons name="camera" size={scale(40)} color="white" />
        </PictureView>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const PictureView: React.VFC<{
  uri: string | null | undefined;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ uri, children, style }) =>
  uri ? (
    <ImageBackground
      source={{ uri }}
      style={[styles.pictureWrapper, style]}
      imageStyle={{ borderRadius: 9999 }}>
      {children}
    </ImageBackground>
  ) : (
    <View style={[styles.pictureWrapper, style]}>{children}</View>
  );

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
