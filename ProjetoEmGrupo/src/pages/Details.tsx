import { View as Box, Flex, Icon, Image, Pressable, Text } from "native-base";
import React, { useState } from "react";
import DetailsHeader from "../components/DetailsHeader";

import { Entypo } from "@expo/vector-icons";
import DetailsProductInfo from "../components/DetailsProductInfo";
import Rating from "../components/Rating";
import { RootStackParamList } from "../../App";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

interface IDetailsProps {
  route: {
    params: {
      name: string;
      description: string;
      rating: number;
      ratingCount: number;
      imagePath: string;
      calories: number;
      amount: string;
      distance: number;
      delivery: "Express" | "Standard";
      price: number;
    };
  };
  navigation: ProfileScreenNavigationProp;
}

export default function Details({ route, navigation }: IDetailsProps) {
  const {
    amount,
    calories,
    delivery,
    description,
    distance,
    imagePath,
    name,
    price,
    rating,
    ratingCount,
  } = route.params;

  const [orderCount, setOrderCount] = useState(1);

  function addOrderCount() {
    setOrderCount((prev) => prev + 1);
  }

  function subOrderCount() {
    orderCount > 1 && setOrderCount((prev) => prev - 1);
  }

  function returnToHomePage() {
    navigation.navigate("Home");
  }

  return (
    <Box px={6} background="white" flex={1}>
      <DetailsHeader onBackClick={returnToHomePage} foodName={name} />
      <Text
        textAlign="center"
        color="#989898"
        fontSize="md"
        maxW="5/6"
        mx="auto"
      >
        {description}
      </Text>

      <Rating rating={rating} ratingCount={ratingCount} center />

      <Image
        source={{
          uri: imagePath,
        }}
        width="full"
        h={250}
        alt="Food image"
        rounded="xl"
      />

      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="space-around"
        mt={4}
      >
        <DetailsProductInfo label="Calorias" valor={calories.toString()} />
        <Box bgColor="#989898" w="2px" h="1/2"></Box>
        <DetailsProductInfo label="Quantidade" valor={amount} />
        <Box bgColor="#989898" w="2px" h="1/2"></Box>
        <DetailsProductInfo label="Distancia" valor={`${distance} km`} />
      </Box>

      <Box
        w="full"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mt={12}
      >
        <Box>
          <Text fontSize="md" color="#989898">
            Order
          </Text>
          <Box flexDir="row">
            <Pressable
              w={6}
              h={6}
              alignItems="center"
              justifyContent="center"
              borderWidth={2}
              rounded="full"
              borderColor="#989898"
              onPress={addOrderCount}
            >
              <Icon as={Entypo} name="plus" size={4} color="#989898" />
            </Pressable>
            <Text fontSize="md" color="#2F4B4E" fontWeight="semibold" mx={2}>
              {orderCount.toString().padStart(2, "0")}
            </Text>
            <Pressable
              w={6}
              h={6}
              alignItems="center"
              justifyContent="center"
              borderWidth={2}
              rounded="full"
              borderColor="#989898"
              onPress={subOrderCount}
            >
              <Icon as={Entypo} name="minus" size={4} color="#989898" />
            </Pressable>
          </Box>
        </Box>

        <DetailsProductInfo valor={delivery} label="Delivery" />

        <DetailsProductInfo valor={price.toString()} label="Price" />
      </Box>

      <Flex flex={1} justify="flex-end" pb={6}>
        <Pressable
          w="100%"
          alignSelf="center"
          h={50}
          background="#C67C4E"
          rounded="md"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          opacity={1}
          _pressed={{ opacity: 0.5 }}
        >
          <Text fontSize="lg" fontWeight="semibold" color="white" px={2}>
            Adiconar ao carrinho
          </Text>
        </Pressable>
      </Flex>
    </Box>
  );
}
