import { useContext } from 'react';
import { AppContext } from '../../context';
import {
  cardContentNoReward, cardContent1, cardContent2, cardContent3,
} from '../MainSection/AboutThisProject/cards-content';
import BackThisProjectModalCard from './BackThisProjectModalCard';
import { Content, Overlay, CardWrapper } from './styles';

export default function BackThisProjectModal() {
  const { setShowBackThisProjectModal } = useContext(AppContext);

  return (
    <Overlay>
      <Content>
        <h2>Back this project</h2>
        <span>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
        <button type="button" id="close_modal" onClick={() => setShowBackThisProjectModal((prevState) => !prevState)}>
          <img src="assets/icon-close-modal.svg" alt="close icon" />
        </button>

        <CardWrapper>
          <BackThisProjectModalCard {...cardContentNoReward} />
          <BackThisProjectModalCard {...cardContent1} />
          <BackThisProjectModalCard {...cardContent2} />
          <BackThisProjectModalCard {...cardContent3} outOfStock />
        </CardWrapper>
      </Content>
    </Overlay>
  );
}
