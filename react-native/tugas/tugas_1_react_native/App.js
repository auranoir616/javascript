/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/menugame';
import MenuHits from './Component/menuhits';
import MenuBerita from './Component/menuBerita';
import {Text, View, StatusBar} from 'react-native';

function Header() {
  return <Text>Halaman Header</Text>;
}

function Footer() {
  return <Text>Footer @Niomic</Text>;
}

function App(){
  return (
    <View>
      <StatusBar backgroundColor="green" />
      <Header/>
      <MenuUtama/>
      <MenuGame/>
      <MenuBerita/>
      <MenuHits/>
      <Footer />
    </View>
  );
}

export default App;
