import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    fontSize: 35,
    top: 90,
    alignSelf: 'center',
    color: '#000',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
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
    justifyContent: 'center', // Centers children vertically
    left: 20,
    right: 20,
    top: 250,
  },
  
  text2: {
    fontFamily: 'Emanee',
    fontSize: 25,
    textAlign: 'center', // Ensures the text is centered horizontally
    color: '#000',
    lineHeight: 30,
  },
  
 

});

export default styles;
