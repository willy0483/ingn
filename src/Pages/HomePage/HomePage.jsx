import { useEffect, useState } from "react";
import { client } from "../../Client/ContentfulClient";
import { NavLink } from "react-router-dom";

import { Article } from "../../Components/Article/Article";
import { AuthorName, DateAuthorContainer, ReadMore } from "../../Components/Article/Article.Styled";
import { ReleaseDate } from "../../Components/ReleaseDate/ReleaseDate";
import { Container } from "../../Components/Container/Container";
import { GridContainer } from "../../Components/GridContainer/GridContainer";
import { GridItem } from "../../Components/GridContainer/GridContainer.Styled";

export const HomePage = () => {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        limit: 13,
      })
      .then((data) => setArticleData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(articleData);

  return (
    <Container width={"1200px"}>
      <GridContainer>
        {articleData?.items?.map((article, index) => {
          return (
            <GridItem index={index} key={article.sys.id} className={`grid-item grid-item-${index}`}>
              <Article>
                <NavLink to={`/details/${article.sys.id}`} key={article.sys.id}>
                  <figure>
                    <figcaption>
                      <h3>{article.fields.overskrift}</h3>
                      {article.fields.underrubrik ? <p>{article.fields.underrubrik}</p> : ""}
                      <DateAuthorContainer>
                        <ReleaseDate dateString={article.fields.dato}></ReleaseDate>
                        <span> - </span>
                        <AuthorName>{article.fields.forfatter}</AuthorName>
                      </DateAuthorContainer>
                      <ReadMore>
                        <p>Læs mere</p>
                      </ReadMore>{" "}
                    </figcaption>
                    <img src={"https:" + article.fields.billede.fields.file.url} alt="" />
                  </figure>
                </NavLink>
              </Article>
            </GridItem>
          );
        })}
      </GridContainer>
    </Container>
  );
};
