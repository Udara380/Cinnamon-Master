import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const styles = StyleSheet.create({
  container: {
    paddingLeft: width*0.05,
    paddingRight: width*0.05,
    paddingTop: height*0.03,
    backgroundColor: '#f0f0f0',
    alignItems: 'stretch',
    minHeight: height,
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
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    top: height*0.02,
  },
  qtyButton: {
    width: width*0.08,
    height: height*0.04,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    marginHorizontal: width*0.04,
    backgroundColor: '#eee',
  },
  qtyText: {
    fontSize: fontSize,
  },
  countText: {
    fontSize: fontSize*0.8,
    fontFamily: 'Emanee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: height*0.09,
  },
  totalLabel: {
    fontSize: fontSize*1.3,
    fontFamily: 'Emanee',
  },
  totalValue: {
    fontSize: fontSize*1.3,
    fontFamily: 'Emanee',
    color: '#EF7011',
  },
    notice: {
    top: height*0.1,
  },
  notice1: {
    fontSize: fontSize*0.6,
    fontFamily: 'Emanee',
  },
  label1: {
    top: height*0.03,
    fontSize: fontSize*0.8,
    fontFamily: 'Emanee',
    marginBottom: height*0.02,
  },
    label2: {
    fontSize: fontSize*0.8,
    fontFamily: 'Emanee',
    top: height*0.04,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: height*0.02,
    top: height*0.06,
  },
  input1: {
    top: height*0.025,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: height*0.02,
    minHeight: height * 0.12,
    textAlignVertical: 'top', 
  },
  confirmButton: {
    top: height*0.14,
    backgroundColor: '#EF7011',
    paddingVertical: height*0.02,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmText: {
    color: 'white',
    fontSize: fontSize,
    fontFamily: 'Emanee',
  },
});
export default styles;