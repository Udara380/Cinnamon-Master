import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;
const BUTTON_HEIGHT_PERCENTAGE = 0.06;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: -StatusBar.currentHeight,
    // backgroundColor: "#ffffff",
  },
  image: {
    flex: 1, // Makes the image fill available space
    width: width, // Set image width to the screen width
    height: height * 0.45, // Set image height to 40% of the screen height
    resizeMode: 'cover', // Makes the image cover the area
    alignSelf: 'center', // Centers the image horizontally
  },
    formContainer: {
    marginTop: height*0.25,
    paddingHorizontal: width * 0.1, // More consistent than percentage string
    backgroundColor: 'white',
    paddingVertical: 25,
    flex: 1,
  },
  loginButton: {
    height: height * BUTTON_HEIGHT_PERCENTAGE*1.1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F26B1D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width*0.1,
  },
  loginButtonText: {
    fontFamily: 'Emanee',
    color: '#F26B1D',
    fontSize: fontSize*0.9,
    marginLeft: width*0.02,
  },
   buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
   imgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:height*0.25
  },
  login: {
    width: width * 0.8,
    height: height * 0.7,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: height*0.25
  },
});

export default styles;
