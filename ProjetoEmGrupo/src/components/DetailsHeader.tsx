import { Box, Icon, Text } from "native-base";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";

interface IDetailsHeaderProps {
  onBackClick: () => void;
  foodName: string;
}

export default function DetailsHeader({
  onBackClick,
  foodName,
}: IDetailsHeaderProps) {
  return (
    <Box
      w="full"
      mt={1}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Icon as={Feather} name="arrow-left" size={28} onPress={onBackClick} />
      <Text fontSize="2xl" fontWeight="bold">
        {foodName}
      </Text>
      <Icon as={AntDesign} name="heart" size={28} />
    </Box>
  );
}
