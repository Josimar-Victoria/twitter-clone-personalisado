import React from "react";
import { SidebarIcon } from "./styles";

export default function IconOption({ text, Icon, active, primary }) {
  return (
    <SidebarIcon active={active} primary={primary} >
      <Icon />
      <h2>{text}</h2>
    </SidebarIcon>
  );
}
