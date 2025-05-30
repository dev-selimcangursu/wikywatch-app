import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../style';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        placeholder="Mesajınızı yazın..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Gönder</Text>
      </TouchableOpacity>
    </View>
  );
}
