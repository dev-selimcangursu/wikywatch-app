import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    backgroundColor: "#f7f9fc",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#f7f9fc",
  },
  formContainer: {
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#f7f9fc",
    minHeight: 180,
  },
  card: {
  
    borderRadius: 16,
    padding: 20,
    marginTop: 25,
  
   
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  label: {
    width: 100,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    flex: 1,
    color: "#000",
  },
  errorText: {
    color: "red",
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#25D366",
    padding: 14,
    borderRadius: 10,
    justifyContent: "center",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
