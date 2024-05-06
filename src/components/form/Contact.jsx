import { Center, PillsContainer } from "../common/Containers";
import { ContactContainer } from "../common/ContactContainer";
import { FWButton } from "../common/FWButton";
import { Pill } from "../common/Pill";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import { BudgetTitle } from "./BudgetTitle";
import { InputContainer } from "./Input";

export const Contact = () => {
  return (
    <>
      <Center $end="true">
        <Title
          $marBtm="20px"
          $425fontSize="20px"
          $768margin="50px 0 20px"
          $1024margin="0 0 40px"
        >
          Tell us about your <br /> <TitleSpan>project</TitleSpan>
        </Title>
        <PillsContainer $minMargin="20px" $768margin="0" $1024margin="0">
          <Pill>Web Development</Pill>
          <Pill>Application Development</Pill>
          <Pill>Maintenance</Pill>
          <Pill>Cloud Solutions</Pill>
          <Pill>Other</Pill>
        </PillsContainer>
        <InputContainer type="text" placeholder="Your Name" />
        <InputContainer type="text" placeholder="Your Email" />
        <InputContainer type="text" placeholder="Tell Us About Your Project" />

        <BudgetTitle>Project Budget</BudgetTitle>

        <PillsContainer>
          <Pill>10K - 20K</Pill>
          <Pill>30K - 40K</Pill>
          <Pill>50K - 100K</Pill>
          <Pill>+100K</Pill>
        </PillsContainer>

        <FWButton>Send Request</FWButton>
        <ContactContainer $alignCenter={"center"}>
          <Pill>info@tenxrs.com</Pill>

          <BudgetTitle>Cell: 012 345 7890</BudgetTitle>
          <BudgetTitle $425width="400px">
            Location: Broadacres Drive, Fourways, 2191{" "}
          </BudgetTitle>
        </ContactContainer>
      </Center>
    </>
  );
};
