import styled from "styled-components";

export const WidgetContainer = styled.div`
flex: 0.3;
overflow-y: scroll;
box-sizing: border-box;
&::-webkit-scrollbar {
    width: 5px !important;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(179, 179, 179);
    cursor: pointer;
  }

  @media only screen and (max-width: 1004px) {
    flex: 0.4;
  }
  @media only screen and (max-width: 500px) {
   display: none;
  }
`
export const Header = styled.header`
background-color: white !important; ;
height: 50px !important;
position: sticky !important;
padding-top: 10px !important;

`
export const DivIcon = styled.nav`
display: flex;
align-items: center;
background-color: #eee;
padding: 10px !important;
border-radius:  20px !important;
> .searchIcon{
    color: var(--twitterColor);
}
> input{
    border: none;
    outline: none;
    padding-left: 10px !important;
    background-color: #eee;
}
`
export const DivContent = styled.div``