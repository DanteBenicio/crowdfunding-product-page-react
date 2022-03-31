import { ButtonElement } from './styles';

type ButtonProps = {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <ButtonElement type="button">{text}</ButtonElement>
  );
}
