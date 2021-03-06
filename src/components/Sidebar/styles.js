import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 0.2;
  min-width: 255px;
  padding: 20px;

  > .twitter-logo {
    margin: 10px 0;
    width: 46px;
    height: 30px;
    fill: var(--twitterColor) !important;
  }
  > Button {
    background-color: var(--twitterColor) !important;
    border-radius: 9999px !important;
    border: none !important;
    color: white !important;
    font-weight: 800 !important;
    height: 46px !important;
    padding: 0 30px !important;
    margin-top: 10px !important;
    text-transform: inherit !important;
  }
  @media only screen and (max-width: 1280px) {
    flex: 0.05;
    min-width: 50px;
    > Button {
      display: none !important;
    }
  }
  @media only screen and (max-width: 1004px) {
    width: 40px;
  }
  @media only screen and (max-width: 500px) {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    height: 50px;
    background-color: white;
    width: 100%;
    padding: 0;
    .twitter-logo {
      display: none;
    }
  }
`;
export const SidebarIcon = styled.div`
  align-items: center;
  display: flex;
  padding: 14px 10px;
  margin: 5px;

  > h2 {
    cursor: pointer;
    font-size: 19px;
    font-weight: 300;
    margin-bottom: 0 15px 0 20px;
    margin-left: 20px;
  }
  > .MuiSvgIcon-root {
    color: #000;
    cursor: pointer;
    height: 30px;
    width: 30px;
  }
  &:hover {
    background-color: var(--twitterColorHover) !important;

    color: var(--twitterColor) !important;
    transform: color 100ms ease-out !important;
    border-radius: 9999px !important;
  }
  ${(prosp) =>
    prosp.active &&
    css`
      color: var(--twitterColor);
      background-color: var(--twitterColorHover);
      border-radius: 9999px;
      height: 50px;
    `}
  @media only screen and (max-width: 1280px) {
    border-radius: 50%;
    >h2{
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
   color: #b8b8b8;
   display: ${prosp => prosp.primary ? 'none' : ''};
   color: ${prosp => prosp.primary ? 'var(--twitterColor)' : ''};
  }
`;
