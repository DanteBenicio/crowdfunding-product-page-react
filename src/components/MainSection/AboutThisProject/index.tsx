import React from 'react';
import Card from '../../Card';
import { cardContent1, cardContent2, cardContent3 } from './cards-content';
import { CardsWrapper, Container, ProjectInfo } from './styles';

export default function AboutThisProject() {
  return (
    <Container>
      <ProjectInfo>
        <h2 id="about_this_project">About this project</h2>
        <p className="description">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className="description">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </ProjectInfo>
      <CardsWrapper>
        <Card {...cardContent1} />
        <Card {...cardContent2} />
        <Card {...cardContent3} />
      </CardsWrapper>
    </Container>
  );
}
