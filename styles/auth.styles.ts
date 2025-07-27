import { StyleSheet } from "react-native";

const authStyle = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ab3434ff",
  },
  secondaryContainer: {
    minHeight: "50%",
    minWidth: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    margin: 4,

    gap: 10,
  },
  textInput: {
    minWidth: "50%",
    borderRadius: 8,
    padding: 8,
    borderWidth: 3,
    borderColor: "#000000",
  },
});

export default authStyle;
