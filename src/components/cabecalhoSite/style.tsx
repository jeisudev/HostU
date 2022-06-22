import styled from "styled-components";

export const Intro = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:var(--gray-dark);
height: 40px;
width: 100%;
p{
    color: var(--light);
    font-size: 1.125rem;
    @media screen and (max-width: 650px){
        font-size: .875rem;
    }
    &:hover{
    color: var(--teal);
    cursor: pointer;
}
}
`;