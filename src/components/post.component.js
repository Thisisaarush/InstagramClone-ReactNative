import React from "react";
import styled from "styled-components";
import { FlatList, View, Text, Image } from "react-native";
import { USER_DATA } from "./userData";
import { Feather, AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

// styled components
const ListContainer = styled.View`
  flex: 1;
`;
const PostContainer = styled.View`
  margin: 0 auto;
`;
const ImageStyled = styled.Image`
  width: 388px;
  height: 400px;
`;
const PostHeader = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
`;
const UserName = styled.View`
  flex-direction: row;
  align-items: center;
`;
const User = styled.Text`
  font-weight: 700;
`;
const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 34px;
  margin-right: 10px;
`;
const PostFooter = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
`;
const LikeButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Caption = styled.View`
  padding: 0px 16px 20px;
`;

export const PostComponent = () => {
  const renderItem = ({ item }) => (
    <PostContainer>
      <PostHeader>
        <UserName>
          <UserImage source={{ uri: item.image_url }} />
          <User>{item.user_name}</User>
        </UserName>
        <Feather name="more-vertical" size={24} color="black" />
      </PostHeader>
      <ImageStyled source={{ uri: item.post_url }} />
      <PostFooter>
        <LikeButtons>
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
          <FontAwesome
            name="comment-o"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        </LikeButtons>
        <Feather name="bookmark" size={24} color="black" />
      </PostFooter>
      <Caption>
        <User>{item.user_name}</User>
        <Text>{item.caption}</Text>
      </Caption>
    </PostContainer>
  );

  return (
    <ListContainer>
      <FlatList
        data={USER_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ListContainer>
  );
};
