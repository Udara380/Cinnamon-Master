import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.04,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF7011',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginLeft: width*0.03,
    width: width * 0.4,
  },

  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF7011',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginRight: width*0.03,
    width: width * 0.4,
  },

  buttonText: {
    color: '#fff',
    fontSize: fontSize * 0.8,
    fontFamily: 'Emanee',
    marginLeft: width*0.02,
  },

  row: {
    // justifyContent: 'space-between',
    // marginBottom: 12,
  },
  textheader: {   
    left:width*0.02,   
    marginVertical: height*0.02,
    paddingBottom: height*0.01,
    fontFamily: 'Emanee',
    fontSize: fontSize,
  },

  card: {
    flex: 1,
    backgroundColor: '#rgba(78, 78, 78, 0.14)',
    margin: width*0.015,
    borderRadius: 10,
    padding: height*0.01,
    alignItems: 'center',
    maxWidth: '30%',
  },
  image: {
    width: width * 0.23,  // screen width 25%
    height: width * 0.23, // square image
    borderRadius: 10,
    marginBottom: height*0.01,
    resizeMode: 'cover',
  },
  name: {
    fontWeight: 'bold',
    fontSize: fontSize * 0.8,
    marginBottom: height*0.02,
    textAlign: 'center',
  },
  quantity: {
    fontSize: fontSize * 0.6,
    marginBottom: height*0.002,
    marginLeft: width*0.01,
    alignSelf: 'left',
    fontFamily: 'Emanee',
  },
  price: {
    fontSize: fontSize * 0.6,
    marginBottom: height*0.002,
    marginLeft: width*0.01,
    alignSelf: 'left',
    fontFamily: 'Emanee',
  },
  button: {
    marginTop: height*0.01,
    paddingVertical: height*-0.02,
    paddingHorizontal: width*0.03,
    backgroundColor: '#EF7011',
    borderRadius: 9,
 },
  buttontext: {
    fontFamily: 'Emanee',
    textAlign: 'center',
    paddingVertical: height*0.01,    
    paddingHorizontal: width*0.02,
    color: '#fff',
    fontSize: fontSize * 0.7,
  },
  
});

export default styles;
