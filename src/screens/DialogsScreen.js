import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Button, Text } from "react-native";
import dialogsJSON from "../serverData/dialogs.json";
import DialogCard from "../modules/DialogCard";

export default ({ navigation }) => {
  const [dialogs, setDialogs] = useState(dialogsJSON);

  return (
    <SafeAreaView>
      <FlatList
        data={dialogs}
        renderItem={({ item, index }) => (
          <DialogCard item={item} navigation={navigation} key={item.key} />
        )}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};
