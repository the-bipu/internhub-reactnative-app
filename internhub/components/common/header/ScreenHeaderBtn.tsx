import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image 
        source={iconUrl} 
        resizeMode='cover'
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnImg: {
    borderRadius: 6,
  },
});

export default ScreenHeaderBtn;