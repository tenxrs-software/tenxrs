import { Center} from "../common/Containers";
import { Subtitle } from "../common/Subtitle";
import { TitleSpan } from "../common/TitleSpan";
import { ProcessItems } from "./ProcessContainer";

export const Proccess = () => {
  return (
    <>
      <Center $text="true">
        <Subtitle  $mx_width='true' $marginLeft='35px'>
          Our process is <TitleSpan>simple</TitleSpan>
        </Subtitle>
        <ProcessItems icon={"icon"} title={"Title"} subTitle={"Sub"} />
      </Center>
    </>
  );
};
