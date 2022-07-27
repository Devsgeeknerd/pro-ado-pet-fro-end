import { Main__Title, Main__Subtitle } from "./styles";

interface TitleProps {
  main__title: string;
  main__subtitle: string | JSX.Element;
}

function Title(props: TitleProps) {
  return (
    <>
      <Main__Title>{props.main__title}</Main__Title>
      <Main__Subtitle>{}</Main__Subtitle>
    </>
  );
}

export default Title;
