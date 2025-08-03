import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: -StatusBar.currentHeight,
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
    alignItems:'center',
    left: 20,
    right: 20,
    top:250,
  },
  container1: {
    position: 'absolute',
    alignItems: 'center',
    width: '85%',  
    alignSelf: 'center',
    top: height*0.3,
  },
  
  text2: {
    fontFamily: "Emanee",
    color: "#808080",
    fontSize: fontSize*0.8, 
    textAlign: "justify",
    lineHeight: height*0.03,
  },
  
 

});

export default styles;
