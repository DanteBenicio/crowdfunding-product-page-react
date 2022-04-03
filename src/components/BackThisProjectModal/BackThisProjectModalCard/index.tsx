/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';
import { BackThisProjectModalCardProps } from '../../../types/card';
import Button from '../../Button';
import DaysLeft from '../../DaysLeft';
import {
  ActionButtons, ActionButtonsWrapper, Card, CardHeader, CardWrapper,
} from './styles';

export default function BackThisProjectModalCard({
  noReward, daysLeft, name, pledgePrice, outOfStock, description,
}: BackThisProjectModalCardProps) {
  const inputCheck = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState<boolean>(false);

  function showCard() {
    if (activeCard) {
      inputCheck.current!.checked = false;
      setActiveCard(!activeCard);
      return;
    }

    setActiveCard(!activeCard);
  }

  function showNoRewardCard() {
    const cardsWrapper = Array.from(cardRef.current?.parentElement?.children!);

    if (inputCheck.current?.dataset.set === 'false') {
      cardsWrapper.forEach((card) => {
        const input = card.firstElementChild?.firstElementChild?.firstElementChild?.firstElementChild;
        const inputDataSet = input?.dataset.set;
        if (inputDataSet === 'true') {
          input?.click();
        }
      });

      inputCheck.current.dataset.set = 'true';
      return;
    }

    if (inputCheck.current?.dataset.set === 'true' && !activeCard) {
      inputCheck.current.checked = false;
      inputCheck.current.dataset.set = 'false';
    }
  }

  return (
    <Card outOfStock={outOfStock!} activeCard={activeCard} ref={cardRef}>
      <CardWrapper>
        <CardHeader>
          <div className="card_name_wrapper">
            <input
              type="radio"
              name=""
              id={name.toLowerCase().replace(' ', '_')}
              onClick={noReward ? showNoRewardCard : showCard}
              data-set={activeCard}
              ref={inputCheck}
            />
            <label
              htmlFor={name.toLowerCase().replace(' ', '_')}
            >
              {name}
            </label>

            {noReward ? '' : (
              <span id="pledge">
                Pledge $
                {pledgePrice}
                {' '}
                or more
              </span>
            )}
          </div>

          {noReward ? '' : <DaysLeft days={daysLeft} fontSize={18} smallFontSize={12} /> }
        </CardHeader>
        <p>{description}</p>
      </CardWrapper>

      {activeCard && (
        <ActionButtons>
          <span>Enter your pledge</span>
          <ActionButtonsWrapper>
            <input type="number" id="pledge_input" />
            <Button text="Continue" width={200} />
          </ActionButtonsWrapper>
        </ActionButtons>
      )}
    </Card>
  );
}

BackThisProjectModalCard.defaultProps = {
  noReward: false,
};