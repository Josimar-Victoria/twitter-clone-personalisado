import { Button, IconButton } from "@material-ui/core";
import { AddPhotoAlternate, Gif } from "@material-ui/icons";
import React from "react";
import { Avatar, Div, DivBoxIcons, DivContent, Form, TweetBoxx } from "./styles";


export default function TweetBox() {
  return (
    <TweetBoxx>
      <Div>
        <Form>
          <div className="form-content">
            <Avatar
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="ij"
            />
            <div className="columns">
              <input type="text" placeholder="¿Que estas pensando?" />
              <input text="text" placeholder="Nombre" />
            </div>
          </div>
        </Form>
        <DivContent>
          <DivBoxIcons>
            <IconButton className='iconstButon'>
              <AddPhotoAlternate />
            </IconButton>
            <IconButton  className='iconstButon'>
              <Gif />
            </IconButton>

            <input text="text" placeholder="Opcional Url de la imagen" />
          </DivBoxIcons>
          <Button>Tweet</Button>
        </DivContent>
      </Div>
    </TweetBoxx>
  );
}
