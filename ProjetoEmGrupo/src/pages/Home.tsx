import { View, FlatList, Box, StatusBar } from "native-base";
import React, { useState, useRef } from "react";
import Header from "../components/Header";
import CategorieItem from "../components/CategorieItem";
import { CATEGORIES } from "../data/categories";
import ProductItem from "../components/ProductItem";
import { FOODS } from "../data/Foods";

export default function Home() {
  const [selectedCategorie, setSelectedCategorie] = useState<string>("Pizza");

  const FoodListRef = useRef(null);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

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
              key={index}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={FoodListRef}
        />
      </Box>
    </View>
  );
}
