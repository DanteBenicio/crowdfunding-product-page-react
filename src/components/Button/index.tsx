import { ButtonProps } from '../../types/button';
import { ButtonElement } from './styles';

export default function Button({
  text, width, showModalFn, notResize, fixedWidth,
}: ButtonProps) {
  if (showModalFn) {
    return (
      <ButtonElement
        type="button"
        width={width!}
        notResize={notResize!}
        onClick={() => showModalFn?.((prevState) => !prevState)}
        fixedWidth={fixedWidth!}
      >
        {text}
      </ButtonElement>
    );
  }

  return (
    <ButtonElement
      type="button"
      width={width!}
      notResize={notResize!}
      fixedWidth={fixedWidth!}
    >
      {text}
    </ButtonElement>
  );
}

Button.defaultProps = {
  width: 0,
  setShowThanksModal: () => {},
  showThanksModal: false,
};
