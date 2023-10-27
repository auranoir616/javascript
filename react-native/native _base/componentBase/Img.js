import React from 'react';
import { View, Image } from 'react-native';

export const IconHome = () => {
  return (
    <View>
      <Image
        source={require('../img/IKONS/IKONS/PNG/64/home.png')}
        style={{ width: 25, height: 25,tintColor:"white" }}
      />
    </View>
  )
};

export const IconMail = () => {
  return (
    <View>
      <Image
        source={require('../img/IKONS/IKONS/PNG/64/mail.png')}
        style={{ width: 25, height: 25,tintColor:"white" }}
      />
    </View>
  )
};

export const IconMusic = () => {
    return (
      <View>
        <Image
          source={require('../img/IKONS/IKONS/PNG/64/music.png')}
          style={{ width: 25, height: 25,tintColor:"white" }}
        />
      </View>
    )
  };

  export const IconBook = () => {
    return (
      <View>
        <Image
          source={require('../img/IKONS/IKONS/PNG/64/book.png')}
          style={{ width: 25, height: 25,tintColor:"white" }}
        />
      </View>
    )
  };

