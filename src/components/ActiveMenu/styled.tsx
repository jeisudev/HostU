import styled from "styled-components";

export const ActiveUlMenu = styled.li`
display: flex;
padding: 20px;
border-bottom: 2px solid var(--gray);
width: 100%;
transition: filter .2s;
gap: 4px;
@media screen and (min-width: 650px){
    display: none;
}
&:hover{
    color: var(--teal);
    filter: brightness(0.8);
    cursor: pointer;
    font-size: 1.1rem;
}
svg{
    color: var(--black);
}
`;

export const MainDiv = styled.div`
width: 100%;
`