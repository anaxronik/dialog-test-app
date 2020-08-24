import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DialogsScreen from "./src/screens/DialogsScreen";
import ChatScreen from "./src/screens/ChatScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dialogs">
        <Stack.Screen
          name="dialogs"
          component={DialogsScreen}
          options={{ title: "Список диалогов" }}
        />
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{ title: "Чат" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
