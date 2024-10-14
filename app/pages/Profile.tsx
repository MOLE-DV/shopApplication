import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../Header";

export default function Profile() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <Text>Profile tab</Text>
      <Header selected="profile" />
    </SafeAreaView>
  );
}
