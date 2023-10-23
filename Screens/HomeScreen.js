import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import ChaptersData from './ChaptersData'; // Import the chapters data


const HomeScreen = ({ navigation }) => {
  StatusBar.setBackgroundColor('#272727');
  StatusBar.setBarStyle('light-content');
    const classes = Object.keys(ChaptersData);
  
    return (
      <View style={styles.container}>
      {/* <Text style={styles.mainText}>Alif Academy</Text> */}
        <FlatList
          data={classes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Chapters', { class: item })}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.flatList}
        />
      </View>
    );
  };
  // ...
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
    padding: 20,
    paddingTop: StatusBar.currentHeight || 0,
},
item: {
    height: 100,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
},
text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
},
mainText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'green',
},
flatList: {
    width: '100%',
},
  });
  
 
  
export default HomeScreen;
