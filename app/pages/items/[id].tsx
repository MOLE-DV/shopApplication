import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from "react-native";
import Header from "../../Header";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import ImageButton from "../../../components/ImageButton";

import GlobalStyles from "../../../styles/GlobalStyles";
import ItemsStyles from "../../../styles/Items/ItemsStyles";

export default function Item() {
  const { itemId, title, icon, price, description } = useLocalSearchParams();

  const ScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 80) {
      //TODO:Dodaj zmiane tła na kolor
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={ItemsStyles.topNavBar}>
        <ImageButton
          style={ItemsStyles.topNavBarBack}
          image={require("../../../assets/icons/png/left.png")}
          onPress={() => router.back()}
        />
      </View>
      <ScrollView onScroll={ScrollHandler} scrollEventThrottle={16}>
        <ImageBackground style={ItemsStyles.icon} source={icon}>
          <Text style={ItemsStyles.title}>{title}</Text>
        </ImageBackground>
        <View style={ItemsStyles.info}>
          <Text style={ItemsStyles.button}>{price}</Text>
          <ImageButton
            image={require("../../../assets/icons/png/cart.png")}
            style={ItemsStyles.buttonIcon}
            buttonStyle={ItemsStyles.button}
          />
          <ImageButton
            image={require("../../../assets/icons/png/mail.png")}
            style={ItemsStyles.buttonIcon}
            buttonStyle={ItemsStyles.button}
          />
        </View>
        <View style={ItemsStyles.description}>
          <Text style={ItemsStyles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>
      <Header selected="search"></Header>
    </SafeAreaView>
  );
}
