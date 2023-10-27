import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import {IconBook,IconHome, IconMail, IconMusic} from './Img';

function FooterComponent() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
           
        <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(0)}>
            <Center>
                <IconHome color="white"/>
              <Text color="white" fontSize={14}>
                Favorites
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(1)}>
            <Center>
            <IconMusic />

              <Text color="white" fontSize={14}>
                Music
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py={2} flex={1} onPress={() => setSelected(2)}>
            <Center>
            <IconMail />

              <Text color="white" fontSize={14}>
                Places
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py={2} flex={1} onPress={() => setSelected(3)}>
            <Center>
            <IconBook />
              <Text color="white" fontSize={14}>
                News
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}

    // export default () => {
    //     return (
    //       <NativeBaseProvider>
    //         <Center flex={1} px="3">
    //             <Footer />
    //         </Center>
    //       </NativeBaseProvider>
    //     );
    // };
    export default FooterComponent