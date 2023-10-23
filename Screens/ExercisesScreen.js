// ExercisesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import ChaptersData from './ChaptersData'; // Import the chapters data
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ExercisesScreen = ({ route }) => {
  StatusBar.setBackgroundColor('#272727');
  StatusBar.setBarStyle('light-content');
  const { class: selectedClass, chapter } = route.params;
  const exercisesData = ChaptersData[selectedClass][chapter].exercises || [];
  const navigation = useNavigation(); // Get the navigation object

  const navigateToPDFViewer = (item) => {
   


   
    navigation.navigate('PDFViewer', { item });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{selectedClass}</Text> */}
      <Text style={styles.text}>{chapter}</Text>
      <FlatList
        data={exercisesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToPDFViewer(item)}>
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.flatList} 
      />
    </View>
  );
};

// Rest of the code remains the same

  

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
flatList: {
    width: '100%',
},
  });
  

  
export default ExercisesScreen;
