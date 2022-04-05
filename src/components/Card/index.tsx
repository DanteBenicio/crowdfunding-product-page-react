import { useContext } from 'react';
import { AppContext } from '../../context';
import { CardProps } from '../../types/card';
import Button from '../Button';
import DaysLeft from '../DaysLeft';
import { Container, Wrapper } from './styles';

export default function Card({
  name, pledgePrice, description, daysLeft, outOfStock,
}: CardProps) {
  const { setShowThanksModal } = useContext(AppContext);

  return (
    <Container outOfStock={outOfStock!}>
      <Wrapper>
        <div className="wrapper">
          <h3>{name}</h3>
          <span id="pledge_price">
            Pledge $
            {pledgePrice}
            {' '}
            or more
          </span>
        </div>
        <p>{description}</p>
        <div className="wrapper">
          <DaysLeft days={daysLeft} fontSize={40} smallFontSize={15} />

          <Button
            text="Select Reward"
            width={160}
            showModalFn={setShowThanksModal}
          />
        </div>
      </Wrapper>
    </Container>
  );
}
