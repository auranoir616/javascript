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
// function Header() {
//   return <Text>ini adalah header</Text>;
// }

function App(){
  return (
    <View>
      <StatusBar backgroundColor="green" />
      <Header/>
      <Text>Project1</Text>
      <Footer />
    </View>
  );
}

export default App;
