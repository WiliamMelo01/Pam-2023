import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerFilms from "./src/components/BannerFilms";
import Filmes from "./src/data/movies.js";

// COMPONENTS
import Header from "./src/components/header";
import SerchBar from "./src/components/SerchBar";
import CardItem from "./src/components/cardItem";
import { series } from "./src/data/series";
import Title from "./src/components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SerchBar />
      <BannerFilms />

      <Title>Filmes</Title>
      <FlatList
        style={{ width: "100%", margin: 15, paddingRight: 10, paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Filmes}
        keyExtractor={(item) => item.ID}
        renderItem={({ item }) => (
          <CardItem nome={item.NOME} nota={item.nota} imagem={item.imagem} />
        )}
      />

      <Title>Séries</Title>
      <FlatList
        style={{ width: "100%", margin: 15, paddingRight: 10, paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={series}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem nome={item.nome} nota={item.nota} imagem={item.imagem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141A29",
    alignItems: "center",
  },
});
