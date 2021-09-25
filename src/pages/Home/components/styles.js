import styled from "styled-components";

// TweetBoxx Css
export const TweetBoxx = styled.div`
  padding: 5px 15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  > .form-content {
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    padding-top: 10px;
  }
  > .form-content > .columns {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;

    > input {
      margin-left: 10px;
      margin-top: 10px;
      width: 100%;
      border: none;
      outline: none;
      font-size: 19px;
      line-height: 25px;
      color: #0f1219;
      height: 50px !important;
      background-color: transparent;
    }
    > ::placeholder {
      font-size: 25px !important;
      font-weight: 400;
    }
  }
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;
export const DivBoxIcons = styled.div`
  display: flex;
  > input {
    margin-left: 10px;
    width: 100%;
    flex: 1;
    border: none;
    font-size: 19px;
    line-height: 25px;
    color: #0f1419;
    outline: none;
  }
`;

export const DivContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  > Button {
    background-color: var(--twitterColor) !important;
    border: none !important;
    color: white !important;
    font-weight: 600 !important;
    width: 80px !important;
    height: 40px !important;
    border-radius: 9999px !important;
    text-transform: inherit !important;
  }
`;

//Post Css

export const PostContainer = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  .post_avatar {
    margin-top: 5px;
  }
`;
export const PostBody = styled.div`
  padding-left: 10px;
  width: 100%;
  overflow: hidden;
  > div span {
    font-weight: 600;
    font-size: 16px;
    color: var(--twitterColor);
  }
  .post_icons {
    font-size: 19px !important;
    color: var(--twitterColor);
  }
  h3 {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
`;
export const PostDescription = styled.div`
margin-bottom: 10px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
}
`;
export const Images = styled.img`
border-radius: 20px;
min-width:100%;
width: 100%;
min-height: 300px;
object-fit: cover;

`;
export const PostFooter = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
color: #5b7083;
transition: all 100ms ease-in;
> .MuiButtonBase-root .MuiIconButton-root:hover:nth-child(1){
    fill: #1da1f2;
}
`;
