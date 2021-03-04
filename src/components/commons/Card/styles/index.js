import styled from "styled-components";

const CardWrapper = styled.div`
	width: 100%;
`;

CardWrapper.Image = styled.img`
	width: 90%;
    height: 250px;
    object-fit: cover;
`;

CardWrapper.Text = styled.h3`
    font-size: 12px;
    color: #555555;
    text-align: center;
`;


export default CardWrapper;