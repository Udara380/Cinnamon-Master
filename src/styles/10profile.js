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
    height:height,
    zIndex: 10,
    alignSelf: 'center',
  },
  text1: {
    fontFamily: '4u-emanee',
    fontSize: fontSize*1.8,
    top: height*0.1,
    alignSelf: 'center',
    color: '#fff',
  },
  container1: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top:height*0.8,
    zIndex: 10,
    // justifyContent: 'center',
    // alignItems:'center',
    marginVertical: height*0.4,
    width:"100%",
  },
  profileImage: {
    position: 'absolute',
    width: width*0.3,
    height: height*0.15,
    alignSelf: 'center', // Center the image
    bottom:height*0.87,
    borderRadius: 70,
    resizeMode: 'cover',
  },
  text2: {
    fontFamily: 'apex',
    fontSize: fontSize*2,
    bottom:height*0.75,
    alignSelf: 'center',
    color: '#000',
  },
    text3: {
    fontSize: fontSize,
    bottom:height*0.74,
    alignSelf: 'center',
    color: '#000',
  },
    button: {
    backgroundColor: '#EF7011',
    padding: height*0.5,
    borderRadius: 8,
    alignItems: 'center',
  },

  formContainer: {
    bottom: height*0.1,
    height: height*0.4, // Set your preferred height
    paddingHorizontal: width*0.15,
  },
  signoutButton: {
    backgroundColor: '#F26B1D',
    borderRadius: 8,
    padding: width*0.04,
    alignItems: 'center',
  },

  signoutButtonText: {
    fontFamily: 'Emanee',
    color: 'white',
    fontSize: fontSize*1.3,
  },
});

export default styles;
