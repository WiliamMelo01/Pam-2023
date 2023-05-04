import { View, Flex,Image } from 'native-base'
import React from 'react'

export default function Header() {
  return (
    <View h={250} w="full" bgColor="#313131">
      <Flex w="full" flexDir="row" align="center" justify="end">
            <Image 
            w={10}
            h={10}
            source={{
                uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }}
            / >
      </Flex>
    </View>
  )
}