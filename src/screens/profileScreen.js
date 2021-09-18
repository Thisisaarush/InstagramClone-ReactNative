import React from "react";
import styled from "styled-components";
import { SafeAreaView, StatusBar, View, Text } from "react-native";

// styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const ProfileScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>profile</Text>
      </View>
    </SafeArea>
  );
};
