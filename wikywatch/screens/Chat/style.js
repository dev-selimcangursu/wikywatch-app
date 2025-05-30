import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  messageContainer: {
    padding: 12,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 20,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
