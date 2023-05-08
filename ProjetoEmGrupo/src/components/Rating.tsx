import { Box, Icon, Text } from "native-base";
import React from "react";
import { Entypo } from "@expo/vector-icons";

interface IRatingProps {
  rating: number;
  ratingCount: number;
  center?: boolean;
}

export default function Rating({
  rating,
  ratingCount,
  center = false,
}: IRatingProps) {
  return (
    <Box
      flexDir="row"
      alignItems="center"
      mb={4}
      mt={1}
      mx={center ? "auto" : 0}
    >
      <Icon as={Entypo} name="star" size={18} color="#FF0" mr={1} />
      <Text fontSize="md" color="#2F4B4E" fontWeight="semibold" mx={1}>
        {rating}
      </Text>
      <Text color="#989898">({ratingCount} Avaliações)</Text>
    </Box>
  );
}
