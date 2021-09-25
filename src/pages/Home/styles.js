import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  background-color: #fff;
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
`;

export const Header = styled.header``;
