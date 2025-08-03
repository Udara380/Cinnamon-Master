import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;

const ImageComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.rectangle} />
        {/* <ImageBackground
          source={require('@/assets/images/cinnaman1.png')} 
          style={styles.image} 
          resizeMode="cover"
          imageStyle={{ opacity: 0.5 }}
          blurRadius={3}
        /> */}
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
    top: height*-0.04,
    left: 0,
    right: 0,
    zIndex: 10, 
  },
  // image: {
  //   width: '100%', // ✅ Ensures full width on any screen
  //   height: height*0.21, // ✅ Makes sure it fills the container
  //   alignSelf: 'center',
  //   marginTop:height*0.05,
  // },
  rectangle: {
    width: '100%',
    height: height*0.26,
    backgroundColor: '#F26B1D', // any color you like
    borderRadius: 40, 
  },
});

export default ImageComponent;
