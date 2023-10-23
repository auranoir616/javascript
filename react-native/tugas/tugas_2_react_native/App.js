/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Barang from './Component/Barang';
import {Text, View, StatusBar} from 'react-native';



function App(){
  return (
  
    <View>
      <Text>TUGAS 2 REACT NATIVE</Text>
      <StatusBar backgroundColor="green" />

<Barang namaBelanja="===================== Total Belanja ====================="/>
    </View>
  );
}

export default App;
