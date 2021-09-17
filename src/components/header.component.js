import React from "react";
import styled from "styled-components";
import { Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import InstagramLogo from "../../src/images/instagram.png";

// styled components
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
const Icons = styled.View`
  flex-direction: row;
`;

export const HeaderComponent = () => {
  return (
    <Header>
      <Image source={InstagramLogo} style={{ width: 100, height: 30 }} />
      <Icons>
        <AntDesign
          name="pluscircleo"
          style={{ marginRight: 16 }}
          size={24}
          color="black"
        />
        <Feather
          name="message-square"
          style={{ marginRight: 16 }}
          size={24}
          color="black"
        />
        <AntDesign name="hearto" size={24} color="black" />
      </Icons>
    </Header>
  );
};
