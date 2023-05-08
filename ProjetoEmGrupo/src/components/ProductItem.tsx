import { Image, Text, Icon, Box, Pressable } from "native-base";
import React, { memo } from "react";
import { Entypo } from "@expo/vector-icons";
import Rating from "./Rating";


interface IProductItemProps {
  name: string;
  imagePath: string;
  price: number;
  distance: number;
  rating: number;
  restaurantName: string;
  ratingCount: number;
  onClick: () => void;
}

function ProductItem({
  name,
  imagePath,
  price,
  distance,
  rating,
  restaurantName,
  ratingCount,
  onClick,
}: IProductItemProps) {
  return (
    <Pressable
      onPress={onClick}
      opacity={1}
      _pressed={{ opacity: 0.5 }}
      shadow="2"
      w={300}
      h="auto"
      background="gray.100"
      alignItems="center"
      my={4}
      mx={2}
      rounded="xl"
      position="relative"
    >
      <Image
        roundedTopLeft="xl"
        roundedTopRight="xl"
        source={{ uri: imagePath }}
        width={300}
        height={150}
        alt="Food image"
        mb={4}
      />
      <Box w="full" px={5}>
        <Box
          w="full"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="md" color="#2F4B4E" fontWeight="semibold" maxW={200}>
            {name}
          </Text>
          <Box flexDir="row" alignItems="center">
            <Icon as={Entypo} name="location-pin" size={18} color="#989898" />
            <Text color="#989898">{distance} km</Text>
          </Box>
        </Box>

        <Text color="#989898">{restaurantName}</Text>

        <Rating rating={rating} ratingCount={ratingCount} />

        <Pressable
          bgColor="#C67C4E"
          maxW={120}
          h={50}
          alignItems="center"
          justifyContent="center"
          roundedTopLeft="lg"
          roundedBottomRight="lg"
          position="absolute"
          bottom={0}
          right={0}
        >
          <Text fontSize="lg" fontWeight="semibold" color="white" px={2}>
            {price.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

export default memo(
  ProductItem,
  (oldProps, nextProps) =>
    oldProps.distance === nextProps.distance &&
    oldProps.imagePath === nextProps.imagePath &&
    oldProps.name === nextProps.name &&
    oldProps.price === nextProps.price &&
    oldProps.rating === nextProps.rating &&
    oldProps.ratingCount === nextProps.ratingCount &&
    oldProps.restaurantName === nextProps.restaurantName
);
