/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {NativeBaseProvider, ScrollView, Box} from 'native-base';
import {View} from 'react-native';
import HeaderContent from './studyKasusComponent/Header';
import ContentAtas from './studyKasusComponent/ContentAtas';
import Footer from './studyKasusComponent/Footer';
import ContentUtama from './studyKasusComponent/ContentUtama';
import Card from './studyKasusComponent/Card';
class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View style={{flex: 1}}>
          <HeaderContent />
          <ContentAtas />
          <ScrollView>
            <ContentUtama /> 
            <Card/>
            </ScrollView>
            <Footer   />  
        </View>
  
     
     
      
      </NativeBaseProvider>
    );
  }
}

export default App;
