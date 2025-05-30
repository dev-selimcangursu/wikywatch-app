import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';

export default function ChatMessage({ message }) {
  return (
    <View
      style={[
        styles.messageBubble,
        message.isBot ? styles.botMessage : styles.userMessage,
      ]}
    >
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
}
