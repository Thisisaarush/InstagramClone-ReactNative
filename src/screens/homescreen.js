import React from "react";
import styled from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";
import { HeaderComponent } from "../../src/components/header.component";
import { StoriesComponent } from "../../src/components/stories.component";
import { PostComponent } from "../../src/components/post.component";

// styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const HomePage = styled.View`
  flex: 1;
`;

export const HomeScreen = () => {
  return (
    <SafeArea>
      <HomePage>
        <HeaderComponent />
        <StoriesComponent />
        <PostComponent />
      </HomePage>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};
