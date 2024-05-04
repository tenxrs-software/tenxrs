import { Center } from "../common/Containers";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import { ProcessItems } from "./ProcessContainer";

export const Proccess = () => {
  return (
    <>
      <Center $text="true">
        <Title $marBtm="40px" $widthVary="100%" style={{ textAlign: "center" }}>
          Our process is <TitleSpan>simple</TitleSpan>
        </Title>
        <ProcessItems icon={"icon"} title={"Title"} subTitle={"Sub"} />
      </Center>
    </>
  );
};
