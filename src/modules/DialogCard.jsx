import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DialogCard({ item, navigation }) {
  const lastMessage = item.messages[item.messages.length - 1];
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("chat", { item: item })}
    >
      <View style={styles.item}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/avatar.png")}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{lastMessage.text.slice(0, 35) + "..."}</Text>
          <Text style={styles.source}>{item.source}</Text>
        </View>
        <View>
          <Text style={styles.time}>
            {new Date(lastMessage.time * 1000).toLocaleTimeString("ru-RU")}
          </Text>
          <Text style={styles.time}>
            {new Date(lastMessage.time * 1000).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
  },
  info: {
    width: "70%",
    paddingLeft: 20,
  },
  name: {
    color: "black",
    fontWeight: "bold",
  },
  source: {
    color: "silver",
  },
  time: {
    color: "grey",
  },
});
