import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f7f9fc",
  },
  header: {
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  formContainer: {
    padding: 15,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 40,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  textarea: {
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    height: 85,
    fontSize: 16,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  warningText: {
    fontSize: 13,
    color: "#555",
    marginBottom: 20,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
