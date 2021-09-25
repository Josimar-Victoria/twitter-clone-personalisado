import { Search } from "@material-ui/icons";
import React from "react";
import { Timeline, Tweet } from "react-twitter-widgets";
import { DivContent, DivIcon, Header, WidgetContainer } from "./styles";

export default function Widgets() {
  return (
    <WidgetContainer>
      <Header>
        <DivIcon>
          <Search className="searchIcon" />
          <input placeholder="Buscar en twitter" />
        </DivIcon>
      </Header>
      <DivContent>
        <Tweet tweetId="841418541026877441" />
        <Tweet tweetId="1439365668952940545" />
        <Tweet tweetId="1219093283265138688" />

        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "TwitterDev",
          }}
          options={{
            height: "400",
          }}
        />
      </DivContent>
    </WidgetContainer>
  );
}
