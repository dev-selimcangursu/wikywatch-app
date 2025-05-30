import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './style';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Merhaba, size nasıl yardımcı olabilirim?', isBot: true },
  ]);

  const handleSend = (text) => {
    const userMessage = {
      id: Date.now().toString(),
      text,
      isBot: false,
    };

    setMessages((prev) => [userMessage, ...prev]);

    // Simulated bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Bunu araştırıyorum, lütfen bekleyin...',
        isBot: true,
      };
      setMessages((prev) => [botResponse, ...prev]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
        contentContainerStyle={styles.messageContainer}
      />
      <ChatInput onSend={handleSend} />
    </KeyboardAvoidingView>
  );
}
