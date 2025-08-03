import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
  text1: {
    fontFamily: 'Emanee',
    fontSize: fontSize*1.8,
    top: height*0.1,
    alignSelf: 'center',
    color: '#fff',
  },

  container1: {  
    position: 'absolute',
    height:height,
    top:height*0.23,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  
 

});

export default styles;
