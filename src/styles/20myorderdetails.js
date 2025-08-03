import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  container: {
    height:height,
    paddingLeft: width*0.05,
    paddingRight: width*0.05,
    paddingTop: height*0.03,
    backgroundColor: '#fff',
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
    marginBottom: height*0.04,
  },
  title: {
    fontFamily: 'Emanee',
    fontSize: fontSize,
    marginLeft: width*0.02,
    top: height*-0.002,
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: height*0.04,
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
    fontFamily:'Emanee',
  },
  text2: {
    fontSize: fontSize*0.8,
    fontFamily:'Emanee',
  },
  section: {
    marginBottom: height*0.1,
  },
  sectionTitle: {
    fontFamily:'Emanee',
    fontSize: fontSize,
    marginBottom: height*0.02,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height*0.04,
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
  },
  orderText: {
    color: '#fff',
    fontFamily:'Emanee',
    fontSize: fontSize*1,
  },
  section1: {
    top: height*-0.01,
  },
  deleteButton: {
  backgroundColor: '#ff4444',
  padding: height*0.015,
  borderRadius: 10,
  alignItems: 'center',
},

deleteText: {
  fontFamily:'Emanee',
  color: '#fff',
  fontSize: fontSize*0.8,
},

});

export default styles;
