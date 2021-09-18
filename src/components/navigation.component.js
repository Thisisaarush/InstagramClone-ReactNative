import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../src/screens/homeScreen";
import { SearchScreen } from "../../src/screens/searchScreen";
import { ReelsScreen } from "../../src/screens/reelsScreen";
import { LikesScreen } from "../../src/screens/likesScreen";
import { ProfileScreen } from "../../src/screens/profileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const NavigationComponent = () => {
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
};
