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
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '80%',  
    alignSelf: 'center',
    marginBottom: height*0.7,
    padding: width*0.02,
    // borderRadius: 10
  },
  
  text2: {
    fontFamily: 'Emanee',
    fontSize: fontSize*1.5,
    textAlign: 'left', 
    color: '#000',
    // lineHeight: 40,
    
  },
  
 

});

export default styles;
