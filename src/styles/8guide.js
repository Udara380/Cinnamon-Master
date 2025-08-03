import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
    scrollContainer: {
      paddingTop:height*-0.1,
      paddingBottom:height*-0.9,
    },
    scrollView: {
      marginTop: height*0.23,
      marginBottom: height*0.11,
    },

maincontainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',  
    alignSelf: 'center',
    marginBottom: height*0.01,
    // top:height*0.2,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',  
    alignSelf: 'center',
  },
  knowledgetext1: {
    fontFamily: "Emanee",
    color: "#000",
    fontSize: fontSize*1.5, 
    textAlign: "center",
},
   line: {
    flex: 1,
    height: height*0.003,
    backgroundColor: 'rgba(34, 33, 33, 0.26)',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',  
    alignSelf: 'center',
  },
    knowledgetext2: {
    fontFamily: "Emanee",
    color: "#808080",
    fontSize: fontSize*0.7, 
    textAlign: "justify",
    lineHeight: height*0.03,
  },
  subcontainer: {
    marginVertical: 20,
    width: '90%',  
    marginBottom: height*-0.03,
  },
  knowledgetext3: {
    fontFamily: "Emanee",
    color: 'rgba(34, 33, 33, 0.84)', 
    fontSize: fontSize*0.9, 
    textAlign: "left",
    lineHeight: height*0.03,
    
  },
 

});

export default styles;
