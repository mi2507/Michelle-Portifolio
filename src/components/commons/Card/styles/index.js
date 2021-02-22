import styled from "styled-components";

const CardWrapper = styled.div`
	width: 100%;
	max-height: 300px;
    margin: 30px 0;
`;

CardWrapper.Image = styled.img`
	max-width: 100%;
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

CardWrapper.Text = styled.h3`
    font-size: 12px;
    color: #555555;
    text-align: center;
`;


export default CardWrapper;