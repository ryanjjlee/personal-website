import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  HeadingStatic,
  Subtitle,
  DescriptionText,
} from "./TextSection.Elements";

const TextSection = ({
  purpleBg,
  greenText,
  lightTextDesc,
  subtitle,
  headline,
  headlineBg,
  description,
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate,
}) => {
  console.log(xAxisRotate);

  return (
    <>
      <InfoSec purpleBg={purpleBg}>
        <Container>
          <InfoRow>
            <TextWrapper>
              <HeadingStatic>{headlineBg}</HeadingStatic>
              <Heading
                greenText={greenText}
                xStretch={xStretch}
                yStretch={yStretch}
                xAxisRotate={xAxisRotate}
                yAxisRotate={yAxisRotate}
                xTranslate={xTranslate}
                yTranslate={yTranslate}
              >
                {headline}
              </Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{subtitle}</Subtitle>
              <DescriptionText>{description}</DescriptionText>
            </TextWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default TextSection;