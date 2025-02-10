import styled from "styled-components";

export const ArticleContainer = styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.grayLight};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  figure {
    margin: 0;
    position: relative;
    height: 100%; /* Ensure the figure takes the full height of the container */
    
    img {
      width: 100%;
      height: 100%; /* Ensure the image takes the full height of the figure */
      display: block;
      object-fit: cover; /* Ensure the image covers the figure */
    }

    figcaption {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: ${(props) => props.theme.color.white};
      padding: 1rem;
      box-sizing: border-box;

      h2, h3 {
        margin: 0;
      }

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.2rem;
      }
    }
  }
`;

export const AuthorName = styled.div`
  font-weight: bold;
`;

export const DateAuthorContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  font-size: 0.9rem;
`;