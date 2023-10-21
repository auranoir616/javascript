/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Platform, StatusBar, StyleSheet} from 'react-native';
import Header from './header';
import Footer from './footer';
import Input from './input';
// function Header() {
//   return <Text>ini adalah header</Text>;
// }

function App(){
  return (
    <View>
      <StatusBar backgroundColor="green" />
      <Header person="ini adalah props person" />
      <Text>Project1</Text>
      <Input />
      <Footer tahun="2023" />
    </View>
  );
}

export default App;
