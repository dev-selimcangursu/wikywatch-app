import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logo: {
    width: 100,
    height: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  menuList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
    gap: 12,
  },
});
