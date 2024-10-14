import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../Header";

export default function Messages() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <Text>Messages Tab</Text>
      <Header selected="messages" />
    </SafeAreaView>
  );
}
