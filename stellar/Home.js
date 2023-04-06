import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicsScreen from "./DailyPic";
import SpaceCraftsScreen from "./SpaceCraft";

const Stack = createStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.screen name="Home" component={HomeScreen} />
                <Stack.screen name="StarMap" component={StartMapScreen} />
                <Stack.screen name="DailyPic" component={DailyPicsScreen} />
                <Stack.screen name="SpaceCraft" component={SpaceCraftsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}