import { View, FlatList, Box, StatusBar } from "native-base";
import React, { useState, useRef } from "react";
import Header from "../components/Header";
import CategorieItem from "../components/CategorieItem";
import { CATEGORIES } from "../data/categories";
import ProductItem from "../components/ProductItem";
import { FOODS } from "../data/Foods";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

interface IHomeProps {
  navigation: ProfileScreenNavigationProp;
}

export default function Home({ navigation }: IHomeProps) {
  const [selectedCategorie, setSelectedCategorie] = useState<string>("Pizza");

  const FoodListRef = useRef(null);

  function redirectUserToDetailsPage(
    name: string,
    description: string,
    rating: number,
    ratingCount: number,
    imagePath: string,
    calories: number,
    amount: string,
    distance: number,
    delivery: "Express" | "Standard",
    price: number
  ) {
    navigation.navigate("Details", {
      amount,
      calories,
      description,
      distance,
      imagePath,
      name,
      rating,
      ratingCount,
      delivery,
      price,
    });
  }

  return (
    <View backgroundColor="gray.100">
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f5" />

      <Header />

      {/*Lista de categorias*/}
      <FlatList
        data={CATEGORIES}
        renderItem={({ item, index }) => (
          <CategorieItem
            categorie={item}
            selectedCategorie={selectedCategorie}
            onPress={() => {
              setSelectedCategorie(item);
              FoodListRef.current.scrollToIndex({
                index: 0,
              });
            }}
            key={index}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/*Lista de produtos*/}
      <Box w="full" display="flex" pl={6}>
        <FlatList
          data={FOODS.filter((food) => food.categorie == selectedCategorie)}
          renderItem={({ item, index }) => (
            <ProductItem
              name={item.name}
              imagePath={item.imageName}
              price={item.price}
              distance={item.distance}
              rating={item.rating}
              restaurantName={item.restaurantName}
              ratingCount={item.ratingCount}
              onClick={() =>
                redirectUserToDetailsPage(
                  item.name,
                  item.description,
                  item.rating,
                  item.ratingCount,
                  item.imageName,
                  item.calories,
                  item.amount,
                  item.distance,
                  item.delivery,
                  item.price
                )
              }
              key={index}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={FoodListRef}
        />
      </Box>
    </View>
  );
}
