import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  container: {
    paddingLeft: width*0.05,
    paddingRight: width*0.05,
    paddingTop: height*0.03,
    alignItems: 'stretch',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Emanee'
  },
  centerText: {
    fontFamily: 'Emanee',
    fontSize: fontSize*0.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Emanee',
    fontSize: fontSize,
    marginLeft: width*0.02,
    top: height*-0.002,
  },
  imageRow: {
    flexDirection: 'row',
    top: height*0.02,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 10,
    marginRight: width*0.05,
  },
  detailsBox: {
    flex: 1,
    justifyContent: 'space-evenly',
    
  },
  name: {
    fontSize: fontSize,
    fontWeight: 'bold',
  },
  text: {
    fontSize: fontSize*0.9,
  },
  text1: {
    fontSize: fontSize*0.9,
    color: '#EF7011',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: fontSize*0.8,
  },
  section: {
    marginBottom: height*0.1,
    top: height*0.04,
  },
  sectionTitle: {
    fontFamily:'Emanee',
    fontSize: fontSize,
    marginBottom: height*0.02,
  },
  phoneRow: {
    top: height*0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callButton: {
    backgroundColor: '#EF7011',
    paddingVertical: height*0.01,
    paddingHorizontal: width*0.1,
    borderRadius: 8,
  },
  callText: {
    color: '#fff',
    fontFamily:'Emanee',
    fontSize: fontSize*0.7,
  },
  orderButton: {
    backgroundColor: '#EF7011',
    paddingVertical: height*0.015,
    borderRadius: 10,
    alignItems: 'center',
    top: height*0.09,
  },
  orderText: {
    color: '#fff',
    fontFamily:'Emanee',
    fontSize: fontSize*1,
    
  },
});

export default styles;
