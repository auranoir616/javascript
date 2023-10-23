import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

class Barang extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputBarang: "",
            inputJumlah: ""
        }
    }
    handleBarang = event =>{
        this.setState({inputBarang: event})
    }
    handleJumlah = event =>{
        this.setState({inputJumlah: event})
    }
    
    render(){
        return(
<View>


<TextInput onChangeText={this.handleBarang} placeholder="Masukkan nama barang"/>
<TextInput onChangeText={this.handleJumlah} placeholder="Masukkan Jumlah" 
keyboardType="numeric"/>
<Text>{this.props.namaBelanja}</Text>
<Text> Nama Barang : {this.state.inputBarang}</Text>
<Text> Jumlah Barang : {this.state.inputJumlah}</Text>

</View>
        
        )
    }
}

export default Barang