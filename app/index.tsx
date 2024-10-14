import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, View } from "react-native";

import GlobalStyles from "../styles/GlobalStyles";
import MainStyles from "../styles/Main/MainStyles";

import Header from "./Header";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={MainStyles.searchBarContainer}>
        <TextInput
          placeholder="Search..."
          style={MainStyles.searchBarInput}
          placeholderTextColor={"white"}
        />
        <StatusBar style="auto" />
      </View>
      <Header selected="main"></Header>
    </SafeAreaView>
  );
}
