import React from 'react';
import {Box, Text, HStack, Center, Pressable } from 'native-base';
import {IconBook,IconHome, IconMail, IconMusic} from './Img';
import {View} from 'react-native'

function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
  <View style={{ position: 'absolute', bottom: 0, display:"flex", flexDirection:"row"}}>
      <Box flex={1} bg="white">
           
        <HStack bg="red" alignItems="center" shadow={2}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(0)}>
            <Center>
                <IconHome color="white"/>
              <Text  fontSize={14}>
                Favorites
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(1)}>
            <Center>
            <IconMusic />

              <Text  fontSize={14}>
                Music
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py={2} flex={1} onPress={() => setSelected(2)}>
            <Center>
            <IconMail />

              <Text fontSize={14}>
                Places
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(3)}>
            <Center>
            <IconBook />
              <Text  fontSize={14}>
                News
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </View>
  )
}
    export default Footer