import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
  text1: {
    fontFamily: 'Aclonica',
    fontSize: fontSize*1.2,
    top: height*0.085,
    alignSelf: 'center',
    color: '#fff',
  },
  text2: {
    fontFamily: 'Aclonica',
    fontSize: fontSize*1.7,
    top:height*0.075,
    alignSelf: 'center',
    color: '#fff',
  },
  container1: {
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingBottom: height*0.13,  // Bottom Navigator space
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: height*-0.14,
    width: '80%',
    top: height*-0.09,
  },
  
  text3: {
    fontFamily: 'apex',
    fontSize: fontSize*2.5,
    alignSelf: 'center',
    color: '#000',
  },
  image2: {
    width: width*0.25,
    height: height*0.18,

  },
  
  image1: {
    left: width*0.06,
    top: 0,
    zIndex: 10,
    position: 'absolute',
    width: width*0.12,
    height: height*0.06,
    alignSelf: 'center', // Center the image
    borderRadius: 70,
    resizeMode: 'cover',
  },
  swiperContainer: {
    width: '100%',
    height: height * 0.45,
    marginTop: height * 0.05, 
    paddingBottom:'40%',
    top: height*-0.12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  // swiper: {
  //   // width: '100%',
  //   // height: '100%',
  //   // paddingBottom:'40%',
  // },
  buttons: {
    top: height*-0.14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height*-0.14,
    width: '90%',
    zIndex:10,
  },
  
  buttonWrapper: {
    alignItems: 'center',
  },
  
  button: {
    width: width * 0.26,
    height: height * 0.13,
    borderRadius: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  
  buttonText: {
    fontSize: fontSize*0.9,
    color: '#000',
    fontFamily: 'Emanee',
    textAlign: 'center',
    marginTop: 10,
  },
  rectangle1: {
    backgroundColor: 'rgba(34, 33, 33, 0.13)',
    width: '100%',
    height: height*0.4,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    flex: 1,  // Ensures full use of screen space
  },
});

export default styles;
