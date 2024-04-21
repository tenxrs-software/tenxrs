import { Center, PillsContainer } from "../common/Containers";
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
                <Title>Tell us about your <br /> <TitleSpan>project</TitleSpan></Title>
                <PillsContainer>
                    <Pill>Web Development</Pill>
                    <Pill>Application Development</Pill>
                    <Pill>Maintenance</Pill>
                    <Pill>Cloud Solutions</Pill>
                    <Pill>Other</Pill>
                </PillsContainer>
                <InputContainer type="text" placeholder="Your Name"/>
                <InputContainer type="text" placeholder="Your Email"/>
                <InputContainer type="text" placeholder="Tell Us About Your Project"/>

                <BudgetTitle>Project Budget</BudgetTitle>

                <PillsContainer>
                    <Pill>10K - 20K</Pill>
                    <Pill>30K - 40K</Pill>
                    <Pill>50K - 100K</Pill>
                    <Pill>+100K</Pill>
                </PillsContainer>

                <FWButton>Get In Touch</FWButton>

                <PillsContainer $marginTop={'80px'} gap={'40px'}>
                    <Pill>info@tenxrs.com</Pill>
                    <BudgetTitle>Cell: 012 345 7890</BudgetTitle>
                    <BudgetTitle>Location: Broadacres Drive, Fourways, 2191 </BudgetTitle>
                </PillsContainer>
            </Center>
        </>);
}