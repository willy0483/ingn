import styled from "styled-components";

export const GridContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    "item item"
    "itemOne itemTwo"
    "itemOne itemThree"
    "itemFour itemThree"
    "itemFive itemFive";
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 20px;

  .grid-item-0 {
    grid-area: item;
    figure{
        height: 630px;
    }

  }
  .grid-item-1 {
    grid-area: itemOne;
    figure{
        height: 630px;
    }
  }
  .grid-item-2 {
    grid-area: itemTwo;
    figure{
        height: 315px;
    }
  }
  .grid-item-3 {
    grid-area: itemThree;
    figure{
        height: 630px;
    }
  }
  .grid-item-4 {
    grid-area: itemFour;
    figure{
        height: 315px;
    }
  }
  .grid-item-5 {
    grid-area: itemFive;
    figure{
        height: 315px;
    }
  }
  .grid-item-6 {
    grid-area: itemSix;
    figure{
        height: 315px;
    }
  }
`;