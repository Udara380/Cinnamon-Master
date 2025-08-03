import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const ImageComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={require('@/assets/images/cinnaman1.png')} 
          style={styles.image} 
          resizeMode="cover"
          imageStyle={{ opacity: 0.5 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    width: '100%',  // ✅ Makes sure it fits any screen width
    height: '45%',  // 45% of the screen height
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, 
  },
  image: {
    width: '100%', // ✅ Ensures full width on any screen
    height: '200', // ✅ Makes sure it fills the container
    alignSelf: 'center',
    marginTop:'-15',
  },
});

export default ImageComponent;
