import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Text } from "native-base";
import Home from './src/pages/Home';

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
