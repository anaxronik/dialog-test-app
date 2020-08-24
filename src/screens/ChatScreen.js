import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

export default ({ route, navigation }) => {
  const [textInput, setTextInput] = useState("");
  const { item } = route.params;
  const [messages, setMessages] = useState(item.messages);

  const sendMessage = () => {
    const newMessage = {
      id: new Date().toString(),
      isMyMessage: true,
      time: new Date().toString(),
      text: textInput,
    };
    setMessages([...messages, newMessage]);
    setTextInput("");
  };

  navigation.setOptions({ title: `Чат ${item.name} (${item.source})` });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.chatBlock}>
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.flatlist}
            data={messages}
            renderItem={({ item }) => (
              <View style={styles.messageRow} key={item.key}>
                <Text
                  style={
                    item.isMyMessage ? styles.myMessage : styles.notMyMessage
                  }
                >
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={(m) => m.id}
          />
        </SafeAreaView>
      </View>

      <View style={styles.newMessageBlock}>
        <TextInput
          style={styles.newMessageInput}
          onChangeText={(text) => {
            setTextInput(text);
          }}
          value={textInput}
        />
        <Button
          style={styles.sendButton}
          onPress={sendMessage}
          title="SEND"
          color="#0A86F9"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBlock: { paddingBottom: 80 },
  messageRow: { margin: 10 },
  myMessage: {
    width: "80%",
    backgroundColor: "#0A86F9",
    padding: 10,
    color: "white",
    borderRadius: 15,
    alignSelf: "flex-end",
  },
  notMyMessage: {
    width: "80%",
    backgroundColor: "#E9E9EB",
    padding: 10,
    color: "#4B4B4C",
    borderRadius: 15,
  },
  newMessageBlock: {
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#E9E9EB",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  newMessageInput: {
    backgroundColor: "white",
    padding: 10,
    height: 50,
    borderRadius: 10,
    width: "80%",
  },
  sendButton: {},
});
