
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Barang from './component/Barang';
import Header from './component/Header';
class App extends Component{
  render(){
    return(
<View>
  <Header data="SELAMAT DATANG"/>
  <Barang />
</View>
    )
  }
}

export default App;
