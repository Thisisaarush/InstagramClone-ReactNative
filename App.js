import React from "react";
import styled from "styled-components";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/homescreen";
import Ionicons from "react-native-vector-icons/Ionicons";

// styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Tab = createBottomTabNavigator();

const SearchScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Search</Text>
      </View>
    </SafeArea>
  );
};
const ReelsScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Reels</Text>
      </View>
    </SafeArea>
  );
};
const LikesScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>LikesScreen</Text>
      </View>
    </SafeArea>
  );
};
const ProfileScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Profile</Text>
      </View>
    </SafeArea>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "HomeScreen") {
              iconName = "home-outline";
            } else if (route.name === "SearchScreen") {
              iconName = "search";
            } else if (route.name === "ReelsScreen") {
              iconName = "add-circle-outline";
            } else if (route.name === "LikesScreen") {
              iconName = "heart-outline";
            } else if (route.name === "ProfileScreen") {
              iconName = "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ReelsScreen"
          component={ReelsScreen}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="LikesScreen"
          component={LikesScreen}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
