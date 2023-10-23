import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  //!fungsi untuk mengubah isi state input 
  handleInput = event => {
    this.setState({input: event});
  };

  render() {
    return (
      <View>
       <TextInput
        //   onChangeText={(event)=>{this.setState({input:event})}}
                onChangeText={this.handleInput}
                style={styles.input}
                placeholder="Type here"
                placeholderTextColor="gray"
        />
        <Text style={styles.text}>{this.state.input}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: { //selector
    borderColor: 'gray', // Warna garis bingkai
    borderWidth: 1,
    padding: 10,
  },
  text:{
    margin:10,
    color:"red",
    fontSize: 20,
    fontStyle:"italic"
  }
});

export default Input;
