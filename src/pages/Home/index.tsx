import React, { useState } from "react";

import StarSvg from "../../assets/svg/icon-star.svg";
import ThankyouSvg from "../../assets/svg/illustration-thank-you.svg";

import {
  Container,
  CardRating,
  CircleIcon,
  CircleRate,
  RateSelectContent,
  Button,
  TextContent,
  ThankContent,
} from "./styles";

const Home: React.FC = () => {
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    if (!selectedRate) {
      alert(
        "Please select a rating from 1 to 5 before submitting your review. Your feedback is important to us and helps us improve our services. Thank you!"
      );
    } else {
      setStep(2);
    }
  };

  return (
    <Container role="main">
      {step === 1 && (
        <CardRating role="contentinfo">
          <CircleIcon>
            <img src={StarSvg} alt="Orange start icon" />
          </CircleIcon>

          <TextContent>
            <h1>How did we do?</h1>

            <p>
              Please let us know how we did with your support
              <br />
              request. All feedback is appreciated to help us <br /> improve our
              offering!
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
          <Button onClick={() => handleSubmit()}>SUBMIT</Button>
        </CardRating>
      )}

      {step === 2 && (
        <CardRating>
          <ThankContent>
            <img
              src={ThankyouSvg}
              alt="Payment machine icon, such as a card and a ticket"
            />

            <span>You selected {selectedRate} out of 5</span>

            <TextContent className="text-content-thank">
              <h1>Thank you!</h1>

              <p>
                We appreciate you taking the time to give a rating. <br />
                If you ever need more support, don’t hesitate to <br /> get in
                touch!
              </p>
            </TextContent>
          </ThankContent>
        </CardRating>
      )}
    </Container>
  );
};

export default Home;
