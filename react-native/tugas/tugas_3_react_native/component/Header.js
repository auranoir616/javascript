import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {

  return (
    <View style={Styles.kontainer} >
        <Text style={Styles.tugas}>Tugas 3 React Native</Text>
        <Text style={Styles.selamat}>{props.data}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  tugas:{
    fontSize:15,
    textAlign:"center",
    margin:5,
    color: "white"
  },
  kontainer:{
    backgroundColor:"#97bf62",
    padding: 10
  },
  selamat:{
    fontSize:30,
    color:"purple",
    textAlign:"center"
    

  }
})
export default Header;
