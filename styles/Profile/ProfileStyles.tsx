import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  profileIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#333",
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    height: 40,
    width: 40,
  },
  welcomeHeader: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    backgroundColor: "#F5F5F5",
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    color: "black",
  },
});
