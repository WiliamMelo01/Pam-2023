import { Pressable, Text } from "native-base";
import React from "react";

interface ICategorieItemProps {
  categorie: string;
  selectedCategorie: string;
  onPress: () => void;
}

export default function CategorieItem({
  categorie,
  selectedCategorie,
  onPress,
}: ICategorieItemProps) {
  const pressableBackgroundColor =
    selectedCategorie === categorie ? "#C67C4E" : "transparent";
  const textColor = selectedCategorie === categorie ? "white" : "#2F4B4E";

  return (
    <Pressable
      ml={6}
      mx={1}
      p={2}
      rounded="md"
      onPress={onPress}
      backgroundColor={pressableBackgroundColor}
    >
      <Text fontSize="lg" fontWeight="medium" color={textColor}>
        {categorie}
      </Text>
    </Pressable>
  );
}
