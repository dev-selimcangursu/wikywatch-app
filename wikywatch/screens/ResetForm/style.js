import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 40,
    backgroundColor: "#f7f9fc",
    flexGrow: 1,
  },
  formWrapper: {
    marginTop: 20,
    borderRadius: 12,
    padding: 5,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#2d3436",
    backgroundColor: "#fafafa",
    textAlignVertical: "top",
    marginBottom: 20,
    minHeight: 90,
  },
  button: {
    backgroundColor: "#0984e3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#0984e3",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
