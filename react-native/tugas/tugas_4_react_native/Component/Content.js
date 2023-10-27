import React, {Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import {Input,NativeBaseProvider,Heading,Button,HStack,Spacer,Divider} from 'native-base'
class Content extends Component {
  constructor() {
    super();
    this.state = {
      nilai1: '',
      nilai2: '',
      operator: '',
      hasil:0
    };
  }
  handleInput1 = event => {
    this.setState({nilai1: event});
  };
  handleInput2 = event => {
    this.setState({nilai2: event});
  };
  handleoperator = Button => {
    this.setState({operator: Button.title});
  };
  handleHasil = () => {
    const nilai1 = parseFloat(this.state.nilai1);
    const operator = this.state.operator;
    const nilai2 = parseFloat(this.state.nilai2);
    let hasil = 0;
    switch (operator) {
      case '+':
        hasil = nilai1 + nilai2;
        break;
      case '-':
        hasil = nilai1 - nilai2;
        break;
      case '*':
        hasil = nilai1 * nilai2;
        break;
      case '/':
        hasil = nilai1 / nilai2;
        break;
      default:
        console.error('Operator tidak valid');
        return;
    }
    this.setState({hasil: hasil})
  };
  render() {
    return (
      <NativeBaseProvider>
      <View>
        <Input variant="underlined" placeholder="Masukkan angka"  keyboardType="numeric" onChangeText={this.handleInput1} />
        <Heading size="4xl"  textAlign={"center"}>{this.state.operator}</Heading>
        <Input variant="underlined" placeholder="Masukkan angka"  keyboardType="numeric" onChangeText={this.handleInput2} />
        <Heading size="4xl" textAlign={"center"}>{this.state.hasil}</Heading>
        <Divider />
        <Text marginTop={10}>Operator</Text>
      <HStack marginTop={10}>
      <Spacer/>
      <Button onPress={() => this.handleoperator({title: '+'})} style={styles.operator} size="lg">+</Button>
      <Spacer/>
        <Button title="-" onPress={() => this.handleoperator({title: '-'})} style={styles.operator} size="lg">-</Button>
        <Spacer/>
        <Button title="*" onPress={() => this.handleoperator({title: '*'})} style={styles.operator} size="lg">*</Button>
        <Spacer/>
        <Button title="/" onPress={() => this.handleoperator({title: '/'})} style={styles.operator} size="lg">/</Button>
        <Spacer/>
        <Button title="hasil" onPress={this.handleHasil} style={styles.hasil}>Hitung</Button>
        <Spacer/>
      </HStack>
       
      </View>
      </NativeBaseProvider>
    );
  }
}
const styles = StyleSheet.create({
  operator:{
    borderRadius:20
  },
  hasil:{
    borderRadius:20,
    backgroundColor:"green"
  }
})

export default Content;
