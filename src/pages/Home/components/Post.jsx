import { IconButton } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import {
  Images,
  PostBody,
  PostContainer,
  PostDescription,
  PostFooter,
  Avatar,
} from "./styles";

export default function Post() {
  return (
    <PostContainer>
      <div className="post_avatar">
        <Avatar src="https://randomuser.me/api/portraits/men/85.jpg" />
      </div>
      <PostBody>
        <div>
          <div>
            <h3>
              Jossy Dev
              <span>
                <VerifiedUser className="post_icons" />
                @jossy_dev
              </span>
            </h3>
            <PostDescription>
              <p>
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet lorem ipsum dolor sit
              </p>
            </PostDescription>
          </div>
          <Images
            src="https://lahaus.imgix.net/uploads/real_estate_attachment/picture/5648666/proyecto_de_vivienda_mattiz_103_apartamentos_en_venta_en_andes_norte_82m_cover_85c6dec33da24f77031c.jpg?auto=compress%2Cenhance%2Cformat&q=40&w=750&h=500&fit=crop&crop=edges"
            alt="dkdn"
          />
          <PostFooter>
            <IconButton>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <IconButton>
              <Repeat fontSize="small" />
            </IconButton>
            <IconButton>
              <FavoriteBorder fontSize="small" />
            </IconButton>
            <IconButton>
              <Publish fontSize="small" />
            </IconButton>
          </PostFooter>
        </div>
      </PostBody>
    </PostContainer>
  );
}
