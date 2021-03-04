import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const Masthead = styled.header`
  font-family: 'Akaya Telivigala', cursive;
  background-image: url("https://images.unsplash.com/photo-1614368558359-9ab23db1bab3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
 
  /* background: linear-gradient(0, #120c56, #000000); */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* background-position: center top;
    /* background-size: cover; */ 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:#ffffff;
    background-size: cover;

    .container{
    /* display: flex; */
    /* display: inline-flex; */
    display: contents;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    width: 100%;
    height: 100%;
    perspective: 340px;
    opacity: 0.7
    /* width: 550px;
  height: 150px; */
  /* background: linear-gradient(0, #120c56, #000000); */
}

.stars{
  margin: 0 auto;
  position: relative;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white, 
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    320px 100px white;
  animation: anim-stars 10s linear infinite;
}

.stars::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white, 
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    320px 100px white;
}


@keyframes anim-stars {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
}
.stars2{
  position: relative;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
  animation: anim-stars 20s linear infinite;
}

.stars2::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
}
    img{
        border-radius:100%;
  
    width:140px;
    height:140px;
    }
   
    ${breakpointsMedia({
        xs: css`
            padding: 90px 0;
            .stars .stars2{
              /* display: contents; */
            }

        `,
        md: css`
            padding: 16% 0;
        `,
        xl: css`
            height: 18vh;
            max-height: 100vh;
        `,
    })}
`;

export default Masthead;