import styled from "styled-components";

export const MainNav = styled.nav`
width: 100%;
height: 5rem;
background-color: var(--light);
position: relative;
display: flex;
justify-content: center;
`;
export const DivLocation = styled.div`
width: 100%;
justify-content: space-around;
align-items: center;
display: flex;
max-width: 1000px;
position: relative;
.MenuBtn{
    font-size: 2rem;
    position: absolute;
    left: 11px;
    transition: filter 0.2s;
    @media screen and (min-width: 650px){
        display: none;
    }
    &:hover{
        cursor: pointer;
        filter: brightness(0.8);
    }
}
`;
export const LinkComponent = styled.a`
font-size: 1.125rem;
cursor: pointer;
gap: 5px;
align-items: center;
display: flex;
transition: filter 0.2s;
@media screen and (max-width: 650px){
    display: none;
}
&:hover{
    color: var(--teal);
    filter: brightness(0.8);
}
`;
export const DivActive = styled.div`
display: none;
position: absolute;
top: 80px;
right: 0;
height: 80vh;
z-index: 1000;
width: 100%;
background-color: var(--light);

&.ativado{
    display: flex;
    @media screen and (min-width: 650px){
    display: none;
}
}
`;