import { View, Flex, Image } from "native-base";
import React from "react";
import SearchInput from "./SearchInput";
import PromoBanner from "./PromoBanner";

export default function Header() {
  return (
    <View h={270} w="full" px={6} mb={24}>
      <Flex w="full" flexDir="row-reverse" align="center" justify="space-between">
        <Image
          w={16}
          h={16}
          source={require("../../assets/user.jpg")}
          mt={6}
          mb={8}
          rounded="xl"
          alt="user icon"
        />
        <Image
          w={10}
          h={10}
          source={require("../../assets/menu.png")}
          mt={6}
          mb={8}
          alt="user icon"
          resizeMode="contain"
        />
      </Flex>
      <SearchInput />
      <PromoBanner />
    </View>
  );
}
