import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ purpleBg }) => (purpleBg ? "#622cad" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  align-self: center;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 3px;
  font-size: 5vh;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 20px;
  font-size: 4vh;
  font-weight: bold;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#ededf5")};
`;

export const DescriptionText = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  padding-right: 50px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  align-self: center;
  color: #ededf5;
`;
