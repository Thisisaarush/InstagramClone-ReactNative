import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import { USER_DATA } from "./userData";

// styled components
const ListContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #3331;
  padding-bottom: 10px;
`;
const ImageContainer = styled.View`
  margin: 5px;
  padding: 2px;
  border: 2px solid tomato;
  border-radius: 34px;
`;
const ImageStyled = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 34px;
`;

export const StoriesComponent = () => {
  const renderItem = ({ item }) => (
    <ImageContainer>
      <ImageStyled source={{ uri: item.image_url }} />
    </ImageContainer>
  );

  return (
    <ListContainer>
      <FlatList
        data={USER_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ListContainer>
  );
};
