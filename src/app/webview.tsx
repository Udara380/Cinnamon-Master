import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, Dimensions } from 'react-native';
import Imageup from "@/src/components/image";
import Backbutton from "@/src/components/backbutton";
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const CinnamonPriceWebView = () => {
  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Imageup />
      <Backbutton />
      
      <View style={styles.container}>
        <Text style={styles.text1}>{"l=re÷ ñ,"}</Text>
      </View>

      <View style={styles.webViewWrapper}>
        <WebView 
          source={{ uri: 'https://exagri.info/mkt/index.html' }}
          style={styles.webview}
          javaScriptEnabled={true}
          originWhitelist={['*']}
          startInLoadingState={true}
          injectedJavaScript={`
            document.body.style.backgroundColor = 'white';
            document.documentElement.style.backgroundColor = 'white';
            true;
          `}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
  text1: {
    fontFamily: '4u-emanee',
    fontSize: fontSize * 1.8,
    top: height * 0.1,
    alignSelf: 'center',
    color: '#fff',
  },
  webViewWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: height * -0.55,
  },
  webview: {
    flex: 1,
    backgroundColor: '#fff', // Outer style
    marginBottom: height * 0.12,
  },
});

export default CinnamonPriceWebView;
