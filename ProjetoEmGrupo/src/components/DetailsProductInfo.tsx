import { Text, Box } from "native-base";
import React from "react";

interface IProductDetailsInfoProps {
  label: "Calorias" | "Quantidade" | "Distancia" | "Delivery" | "Price";
  valor: string;
}

export default function DetailsProductInfo({
  label,
  valor,
}: IProductDetailsInfoProps) {
  return (
    <Box alignItems="center">
      <Text fontSize="md" color="#989898">
        {label}
      </Text>
      <Text fontSize="md" color={label !== "Delivery"? "#2F4B4E" : "#C67C4E"} fontWeight="semibold">
        {label !== "Price"
          ? valor
          : Number(valor).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
      </Text>
    </Box>
  );
}
