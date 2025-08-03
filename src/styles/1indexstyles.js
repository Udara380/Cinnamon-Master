import{StyleSheet,StatusBar,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const my = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: -StatusBar.currentHeight,
    backgroundColor: "#EEEEEE",
  },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1, 
      paddingTop: height*0.4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1: {
      fontFamily: "Aclonica",
      color: "#EF7011",
      fontSize: fontSize*1.7,
      textAlign: "center",
    },
    text2: {
      fontFamily: "Aclonica",
      color: "#ffffff",
      fontSize: fontSize*2.3, 
      textAlign: "center",
    },
  });
export default my;
