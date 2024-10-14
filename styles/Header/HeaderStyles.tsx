import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#283044",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 100,
    bottom: 0,
  },
  text: {
    color: "white",
  },
  imageButton: {
    height: 40,
    width: 40,
    tintColor: "white",
  },
});
