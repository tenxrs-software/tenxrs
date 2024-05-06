import { Center } from "../common/Containers";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import { ProcessItems } from "./ProcessContainer";

export const Proccess = () => {
  return (
    <>
      <Center $text="true">
        <Title
          $marBtm="40px"
          $widthVary="100%"
          style={{ textAlign: "center" }}
          $425fontSize="20px"
          $768margin="0 0 34px"
          $768fontSize="32px"
          $1024margin="80px 0 40px"
        >
          Our process is <TitleSpan>simple</TitleSpan>
        </Title>
        <ProcessItems icon={"icon"} title={"Title"} subTitle={"Sub"} />
      </Center>
    </>
  );
};
