/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, StatusBar, Button, Alert, StyleSheet} from 'react-native';
import Header from './header';
import Footer from './footer';
import Input from './input';


function App() {
  const [nilai, operator] = useState(0);

  const handleTambah = () => {
    operator(nilai + 1);
  };
  const handleKurang = () => {
    operator(nilai - 1);
  };

  return (
    <View>
      <StatusBar backgroundColor="green" />
      <Text style={{margin: 10, textAlign: 'center', color: 'blue', fontSize: 30}}>Project1</Text>

      <Header person="ini adalah props person" />
      <Input />

      <Button title="Button Tambah" onPress={handleTambah} />
      <Button title="Button Kurang" onPress={handleKurang} />

      <Text style={styles.jumlah}>jumlah: {nilai}</Text>

      <Footer tahun="2023" />

    </View>

    // <View style={{flex:1, backgroundColor:"red"}}>
    //   <Text style={{flex:2, backgroundColor:"yellow"}}>Halman 1</Text>
    //   <Text style={{flex:1, backgroundColor:"green"}}>Halman 2</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  jumlah: {
    marginTop: 10,
    marginBottom:350,
    fontSize: 25,
    textAlign: 'center',
  },
  title: {margin: 10, textAlign: 'center', color: 'blue', fontSize: 30},
});

export default App;
