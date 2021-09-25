import { Twitter } from "@material-ui/icons";
import React from "react";
import IconOption from "./IconOption";
import { Container } from "./styles";
import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
export default function Sidebar() {
  return (
    <Container>
      <Twitter className="twitter-logo" />
      <IconOption active text="Home" Icon={Home} />
      <IconOption text="Explorar" Icon={Search} />
      <IconOption text="Notificaciones" Icon={NotificationsNone} />
      <IconOption text="Mensaje" Icon={MailOutline} />
      <IconOption text="Marcadores" Icon={BookmarkBorder} />
      <IconOption text="Listas" Icon={ListAlt} />
      <IconOption text="Perfil" Icon={PermIdentity} />
      <IconOption text="Mas" Icon={MoreHoriz} />
      <Button variant="outlined" fullWidth>
        Twetter
      </Button>
    </Container>
  );
}
