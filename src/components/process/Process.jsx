import { Center } from "../common/Containers"
import { Title } from "../common/Title"
import { TitleSpan } from "../common/TitleSpan"
import { H } from "./ProcessContainer"

export const Proccess = () => {
    return (<>
        <Center $text="true">
            <Title>Our process is  <TitleSpan>simple</TitleSpan> </Title>
            <H icon={"ICON"} title={"Title"} subTitle={"Sub"} />
        </Center>

    </>)
}