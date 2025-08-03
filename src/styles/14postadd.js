import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
      paddingRight:width*0.1,
      paddingLeft:width*0.1,
      paddingTop:height*0.02,
      paddingBottom:height*-0.4,
    },
    scrollView: {
      marginTop: height*-0.03,
      marginBottom: height*0.31,
    },
  header: {
    left:width*-0.02,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height*0.04,
  },
  title: {
    fontFamily: 'Emanee',
    fontSize: fontSize,
    marginLeft: width*0.02,
    top: height*-0.001,
  },
  label: {
    fontSize: fontSize*0.8,
    marginBottom: height*0.02,
    fontFamily:'Emanee',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: height*0.02,
    paddingHorizontal: width*0.04,
    color: '#000',
    marginBottom: height*0.02,
  },
  textInput: {
    fontSize: fontSize*0.2,
    marginBottom: height*0.02,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textArea: {
    height: height*0.2,
    textAlignVertical: 'top',
  },
  imagePicker: {
    marginTop: height*0.01,
    marginBottom:height*0.01,
    backgroundColor: '#ddd',
    width: width*0.3,
    height: height*0.15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageText: {
    color: '#555',
    fontSize: fontSize,
    fontFamily:'Emanee',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#EF7011',
    padding: height*0.02,
    borderRadius: 10,
    marginTop: height*0.02,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily:'Emanee',
    fontSize: fontSize,
  },
});

export default styles;
