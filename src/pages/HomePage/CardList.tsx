import { useAppSelector } from 'hooks/store.hook';
import React, { useEffect, useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import {
  CardIcon,
  CardListItem,
  CardListWrapper,
  HeartIcon,
  HeartIconBox,
} from './CardList.styled';

export const CardList: React.FC = () => {
  const cardList = useAppSelector(state => state.app.profile.cards);

  const ref = useRef<HTMLDivElement>(null);

  const { onMouseDown } = useDraggableScroll(ref);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollLeft += 500;
    }
  }, [ref]);

  return (
    <>
      <CardListWrapper
        className="hide-scroll"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {cardList?.map(card => {
          return (
            <CardListItem key={card.id}>
              <CardIcon
                onDragStart={e => {
                  e.preventDefault();
                }}
                alt={card.id}
                src={card.imageUrl}
              ></CardIcon>
              <HeartIconBox>
                <HeartIcon
                  onDragStart={e => {
                    e.preventDefault();
                  }}
                  alt="heart"
                  src={
                    card.love
                      ? '/static/images/NewAsset/icon_heart_active.png'
                      : '/static/images/NewAsset/icon_heart_disable.png'
                  }
                />
              </HeartIconBox>
            </CardListItem>
          );
        })}
      </CardListWrapper>

      {/* <ScrollMenu
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        <CardListWrapper>
          {cardList?.map(card => {
            return (
              <CardListItem key={card.id}>
                <CardIcon
                  alt={card.id}
                  src={card.imageUrl}
                  onDragStart={event => event.preventDefault()}
                ></CardIcon>
                <HeartIconBox>
                  <HeartIcon
                    alt="heart"
                    src={
                      card.love
                        ? '/static/images/NewAsset/icon_heart_active.png'
                        : '/static/images/NewAsset/icon_heart_disable.png'
                    }
                  />
                </HeartIconBox>
              </CardListItem>
            );
          })}
        </CardListWrapper>
      </ScrollMenu> */}
    </>
  );
};
