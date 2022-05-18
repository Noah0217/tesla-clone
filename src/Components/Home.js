import React from "react";
import styled from "styled-components";

function Home({ title, leftbutton, rightbutton }) {
    return <Wrapper>
        <Container>
            <TextContainer>
                <h1>
                    Model S
                </h1>
                <P>Order Online for <U>Touchless Delivery</U></P>
            </TextContainer>
            <div>
            <ButtonGroups>
                <LeftButton>Custom Order</LeftButton>
                <RightButton>Existing Inventory</RightButton>
            </ButtonGroups>
            <Svg>
                <img src = "./images/down-arrow.svg" alt = "Down Arrow"/>
            </Svg>
            </div>
        </Container>
    </Wrapper>;
}

export default Home;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    /*margin-top: 40px;*/
    background-image: url("./images/model-s.jpg");
    background-position: center center;
    background-repeat: no repeat;
    background-size: cover
`;

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    height: 100%;
`;

const TextContainer = styled.div`
        padding-top: 60px;
        h1{
            text-align:center;
            margin-bottom: 20px;
            font-size: 40px;
        }
`;

const P = styled.p`
    color: #5c5d61;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const U  = styled.p`
    text-decoration: underline;
    padding-left: 3px;
`;

const ButtonGroups = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const LeftButton = styled.button`
        width: 256px;
        height: 40px;
        font-size: 14px;
        border-radius: 100px;
        background-color: rgba(23, 26, 32, 0.8);
        color: white;
        border: none;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        opacity: 0.70;
`;

const RightButton = styled(LeftButton)`
        background-color: #ffff;
        color: black;
        opacity: 0.55;
`;

const Svg = styled.div`
        height: 40px;
        img {
            height: 100%;
            width: 100%;
            animation: animate 2s infinite;
        }      
        
`;
