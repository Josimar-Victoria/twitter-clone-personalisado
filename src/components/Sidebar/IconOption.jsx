import React from "react";
import { SidebarIcon } from "./styles";

export default function IconOption({ text, Icon, active }) {
  return (
    <SidebarIcon active={active}>
      <Icon />
      <h2>{text}</h2>
    </SidebarIcon>
  );
}
