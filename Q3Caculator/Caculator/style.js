import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    padding: 20,
  },

  display: {
    fontSize: 60,
    textAlign: "right",
    marginBottom: 30,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  button: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  buttonWide: {
    width: 165,
    height: 75,
    borderRadius: 38,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  operator: {
    backgroundColor: "#F2F2F2",
  },

  equal: {
    backgroundColor: "#FF9800",
  },

  clear: {
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  text: {
    fontSize: 34,
    color: "#333",
  },

  operatorText: {
    fontSize: 34,
    color: "#FF9800",
    fontWeight: "bold",
  },

  equalText: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
  },

  clearText: {
    fontSize: 28,
    color: "#333",
  },
});