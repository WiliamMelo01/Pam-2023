import { Icon, Input, Image } from "native-base";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <Input
      InputLeftElement={
        <Icon as={AntDesign} name="search1" size={22} color="#989898" ml={4} />
      }
      InputRightElement={
        <Image
          source={require("../../assets/filter.png")}
          h={44}
          w={44}
          mr={4}
          alt="Filter icon"
        />
      }
      color="#989898"
      backgroundColor="gray.100"
      placeholderTextColor="#989898"
      fontSize="md"
      placeholder="Procure uma comida"
      borderWidth={0}
      rounded="xl"
      h={16}
      w="full"
    />
  );
}
