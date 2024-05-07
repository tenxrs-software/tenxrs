import { Center, Wrapper } from "../common/Containers";
import { Subtitle } from "../common/Subtitle";
import { TitleSpan } from "../common/TitleSpan";
import { ProcessItems } from "./ProcessContainer";

export const Proccess = () => {
  return (
    <>
      <Center $text="true">
        <Wrapper>
        <Subtitle $pad24>
          Our process is <TitleSpan>simple</TitleSpan>
        </Subtitle>
        </Wrapper>
        <ProcessItems icon={"icon"} title={"Title"} subTitle={"Sub"} />
      </Center>
    </>
  );
};
