import styled from "styled-components";

export const GridItem = styled.div`
  ${({ index }) =>
    index >= 9 &&
    index <= 1000 &&
    `
    figure {
      display: grid;
      grid-template-columns: 1fr 1fr;

    }
  `}
`;

export const GridContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    "item item"
    "itemOne itemTwo"
    "itemOne itemThree"
    "itemFour itemThree"
    "itemFive itemFive"
    "itemSix itemSix"
    "itemSeven itemEight";
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 20px;

  figure {
    height: 315px;
    display: grid;
  }

  .grid-item-0 {
    grid-area: item;
    figure {
      height: 630px;
    }
  }
  .grid-item-1 {
    grid-area: itemOne;
    figure {
      height: 630px;
    }
  }
  .grid-item-2 {
    grid-area: itemTwo;
    figure {
      height: 315px;
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .grid-item-3 {
    grid-area: itemThree;
    figure {
      height: 630px;
    }
  }
  .grid-item-4 {
    grid-area: itemFour;
    figure {
      height: 315px;
    }
  }
  .grid-item-5 {
    grid-area: itemFive;
    figure {
      height: 315px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "imageFive textFive";
      img {
        grid-area: imageFive;
      }
      figcaption {
        grid-area: textFive;
      }
    }
  }
  .grid-item-6 {
    grid-area: itemSix;
    figure {
      height: 315px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "textSix imageSix";
      img {
        grid-area: imageSix;
      }
      figcaption {
        grid-area: textSix;
      }
    }
  }

  .grid-item-7 {
    grid-area: itemSeven;
    figure {
      display: grid;
      grid-template-columns: 1fr;
      height: 315px;
    }
  }

  .grid-item-8 {
    grid-area: itemEight;
    figure {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, 0.7fr) minmax(0, 1fr);
      height: 315px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    .grid-item-5,
    .grid-item-6 {
      figure {
        display: block;
        height: auto;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-areas:
      "item"
      "itemOne"
      "itemTwo"
      "itemThree"
      "itemFour"
      "itemFive"
      "itemSix"
      "itemSeven"
      "itemEight";
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 20px;
    .grid-item-0,
    .grid-item-1,
    .grid-item-2,
    .grid-item-3,
    .grid-item-4,
    .grid-item-5,
    .grid-item-6,
    .grid-item-7,
    .grid-item-8 {
      figure {
        display: block;
        height: 500px;
      }
    }

    figure {
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-template-rows: minmax(0, 0.7fr) minmax(0, 1fr);
      height: 500px;
    }
  }
`;
