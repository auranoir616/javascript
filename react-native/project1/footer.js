import React, { Component } from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";
//props dalam class component
class Footer extends Component{

    constructor(props){
        super(props)
        this.state={
            usia: "usia: 20",
            name: "wawan",
            year: this.props.tahun,
        }
    }
    render(){
        return(
                <View>
                <Text>ini adalah footer {this.props.tahun} </Text>
                <Text> state : {this.state.name} {this.state.year} {this.state.usia}</Text>
                </View>
        )
    }
}


  
export default Footer;