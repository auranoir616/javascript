import React from 'react';
import {
  Box,
  Flex,
  Text,
  Spacer,
} from 'native-base';
import {View} from 'react-native'
import {IconLocation, IconCamera} from './Img';
function HeaderComponent() {
  return (
    <View>
      <Flex flexDirection="row" h={50} alignItems="center" >
        <Box>
          <IconCamera />
        </Box>
        <Spacer />
        <Box>
          <Text>INSTAWAN</Text>
        </Box>
        <Spacer />
        <Box>
          <IconLocation />
        </Box>
      </Flex>
    </View>
  );
}

export default HeaderComponent;
