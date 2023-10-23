import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';

class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nilai: 0,
    };
  }
  handlingPlus = () => {
    this.setState({nilai: this.state.nilai + 1});
  };

  handlingMinus = () => {
    if (this.state.nilai > 0) {
      this.setState({nilai: this.state.nilai - 1});
    } else {
      Alert.alert('jumlah tidak boleh kurang dari 0');
    }
  };
  render() {
    return (
      <View>

        <Text style={styles.jumlah}>jumlah: {this.state.nilai}</Text>
        <Text style={styles.pesan}>Silahkan Tekan Tombol Di Bawah Ini</Text>

        <View style={styles.kontainertombol}>
          <TouchableOpacity onPress={this.handlingPlus} style={styles.tombolPlus}>
            <Text style={styles.title}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlingMinus} style={styles.tombolMinus}>
            <Text style={styles.title}>-</Text>
          </TouchableOpacity>
        </View>

    
            <Text style={styles.display}>
            {this.state.nilai}
            </Text>
      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
jumlah: {
    textAlign:"right"
},
pesan:{
    textAlign: "center",
    fontWeight:"bold",
    fontSize: 20
},
kontainertombol:{
  flexDirection:"row",
},
tombolPlus:{
    backgroundColor: "green",
    flex:1,
    padding:15,
    margin:20
},
tombolMinus:{
    backgroundColor: "red",
    flex:1,
    padding:15,
    margin:20
},
title:{
 color: "white",
 fontSize: 30,
 textAlign:'center'
},
display:{
    textAlign:'center',
    marginTop:50,
    fontSize:75
}


})
export default Barang;
