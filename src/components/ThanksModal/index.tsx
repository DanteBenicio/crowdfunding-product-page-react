import { useContext } from 'react';
import { AppContext } from '../../context';
import Button from '../Button';
import {
  Check, CheckWrapper, Content, Description, Message, Overlay,
} from './styles';

export default function ThanksModal() {
  const { setShowThanksModal } = useContext(AppContext);

  return (
    <Overlay>
      <Content>
        <CheckWrapper>
          <Check src="assets/icon-check.svg" alt="check simbol" aria-hidden="true" />
        </CheckWrapper>
        <Message>Thanks for your support!</Message>
        <Description>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is completed.
        </Description>

        <Button text="Got it!" width={100} showModalFn={setShowThanksModal} />
      </Content>
    </Overlay>
  );
}
