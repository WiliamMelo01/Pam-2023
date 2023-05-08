import { View, Text, Image, Box } from "native-base";
import React from "react";

export default function PromoBanner() {
  return (
    <Image
      source={require("../../assets/promo.jpg")}
      w="full"
      mt={4}
      h={150}
      alt="Promo image"
      rounded="2xl"
      resizeMode="cover"
    />
  );
}
