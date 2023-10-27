import React from 'react';
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Text,
  HStack,
  Avatar,
  Spacer,
} from 'native-base';
import {View} from 'react-native';
import {IconDown, IconHeart, IconShare, IconMail, IconBookmark} from './Img';
const ContentUtama = () => {
  return (
    <View>
      <HStack space={2} justifyContent="center">
        <Box padding={2}>
          <Avatar
            bg="green.500"
            size="sm"
            source={{
              uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}></Avatar>
        </Box>

        <Box padding={1}>
          <Text fontSize="sm" s>
            nama
          </Text>
          <Text fontSize="xs" italic>
            keterangan
          </Text>
        </Box>
        <Spacer />
        <Box padding={2}>
          <IconDown />
        </Box>
      </HStack>
      <Center>
        <AspectRatio w="98%" ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
      </Center>
      <HStack margin={2}>
        <Box marginRight={5}>
          <IconHeart />
        </Box>

        <Box marginRight={5}>
          <IconShare />
        </Box>
        <Box marginRight={5}>
          <IconMail />
        </Box>
      </HStack>
      <HStack>
        <Box>
          <IconBookmark />
        </Box>
        <Box>
        <Text>Likes</Text>
        </Box>
      </HStack>

      <Text padding={1}> 
        orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        scelerisque leo mauris, eu varius dui consequat ut. Aliquam a orci elit.
        Aliquam erat volutpat. Phasellus laoreet tristique felis, laoreet
        pretium velit molestie ut. Proin non aliquam sem. Proin semper arcu et
        luctus rhoncus. Nam lectus mi, varius non venenatis ac, aliquet sed
        neque.
      </Text>
    </View>
  );
};

export default ContentUtama;
