import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainDisplay from './Components/MainDisplay';
import APIService from './Services/apiService';

export default function App() {
  const [displayedShoes, setDisplayedShoes] = useState([]);

  const updateDisplayedShoes = (newShoeData) => {
    setDisplayedShoes(newShoeData);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MainDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
