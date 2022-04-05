import { useContext, useState } from 'react';
import { AppContext } from '../../../context';
import Button from '../../Button';
import {
  Bookmark, BookmarkContainer, BookmarkWrapper, ButtonsWrapper,
  Container, FirstCard, ProgressBar, Stats, StatsInfo, TitleWrapper,
} from './styles';

export default function MasterCraftStats() {
  return (
    <Container>
      <FirstCard>
        <TitleWrapper>
          <h1 id="title">Mastercraft Bamboo Monitor Riser</h1>
          <span id="application_description">A beautiful & handcrafted monitor stand to reduce neck and eye strain</span>
        </TitleWrapper>

        <ButtonsWrapper>
          <Button text="Back this project" />

          <BookmarkContainer>
            <BookmarkWrapper>
              <Bookmark src="assets/icon-bookmark.svg" alt="bookmark icon" />
            </BookmarkWrapper>
            <span id="bookmark">Bookmark</span>
          </BookmarkContainer>
        </ButtonsWrapper>
      </FirstCard>
      <Stats>
        <StatsInfo>
          <div className="info_stats">
            <span>$89,914</span>
            <small>of $100.000 backed</small>
          </div>
          <div className="info_stats">
            <span>5,007</span>
            <small>total backers</small>
          </div>
          <div className="info_stats">
            <span>56</span>
            <small>days left</small>
          </div>
        </StatsInfo>
        <ProgressBar>
          <span />
        </ProgressBar>
      </Stats>
    </Container>
  );
}
