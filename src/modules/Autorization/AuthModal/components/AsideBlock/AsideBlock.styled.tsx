import styled from "@emotion/styled";
import authBg from 'UI/images/authPhoto/auth.jpg';

const AsideBlockStyle = styled.div`
display: none;
    @media screen and (min-width: 768px) {
     display: flex;
     align-items: center;
     justify-content: center;
     max-width: 500px;
height: 600px;

    background-image:  url(${authBg});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    }
`;

const DescriptionBlock = styled.div`
    font-weight: 500;
    max-width: 74%;
    border-radius: 20px;
    padding: 16px;
    background: linear-gradient(90deg, rgba(223,223,223,0.8) 0%, rgba(223,223,223,0.8) 100%);
`;



export { AsideBlockStyle, DescriptionBlock };
