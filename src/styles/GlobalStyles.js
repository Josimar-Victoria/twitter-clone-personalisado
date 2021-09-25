import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --twitterColor: rgb(108, 200, 117);
    --twitterColorHover: rgb(230, 231, 231);
}

body{ 
    background-color: #fff;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.App{
    display: flex;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;

}
`