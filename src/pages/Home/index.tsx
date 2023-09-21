import React, { useState } from "react";

import StarSvg from "../../assets/svg/icon-star.svg";

import {
  Container,
  CardRating,
  CircleIcon,
  CircleRate,
  RateSelectContent,
  Button,
  TextContent,
} from "./styles";

const Home: React.FC = () => {
  const [selectedRate, setSelectedRate] = useState<number | null>(null);

  return (
    <Container>
      <CardRating>
        <CircleIcon>
          <img src={StarSvg} alt="Orange start icon" />
        </CircleIcon>

        <TextContent>
          <h2>How did we do?</h2>

          <p>
            Please let us know how we did with your support <br /> request. All
            feedback is appreciated to help us <br /> improve our offering!
          </p>
        </TextContent>

        <RateSelectContent>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
            <CircleRate
              key={index}
              onClick={() => setSelectedRate(index)}
              actived={selectedRate === index}
            >
              {index}
            </CircleRate>
          ))}
        </RateSelectContent>
        <Button>SUBMIT</Button>
      </CardRating>
    </Container>
  );
};

export default Home;
