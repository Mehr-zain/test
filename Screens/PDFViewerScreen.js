import React from 'react';
import {StyleSheet, Dimensions, View, Platform, StatusBar} from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewerScreen = ({route}) => {
  //StatusBar.setBackgroundColor('#272727');
  //StatusBar.setBarStyle('light-content');
  const {item} = route.params;
  // console.log(item);

  return (
    <View style={styles.container}>
      <Pdf
        source={{uri: `bundle-assets://${item.path}`}}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
    padding: 0,
    //paddingTop: StatusBar.currentHeight || 0,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PDFViewerScreen;
