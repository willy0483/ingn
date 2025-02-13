import React, { useEffect, useState } from "react";
import { client } from "../../Client/ContentfulClient";
import { NavLink } from "react-router-dom";

import { Article } from "../../Components/Article/Article";
import { AuthorName, DateAuthorContainer, ReadMore } from "../../Components/Article/Article.Styled";
import { ReleaseDate } from "../../Components/ReleaseDate/ReleaseDate";
import { Container } from "../../Components/Container/Container";
import { GridContainer } from "../../Components/GridContainer/GridContainer";
import { GridItem, NeedLogIn } from "../../Components/GridContainer/GridContainer.Styled";

import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const [articleData, setArticleData] = useState();
  const { isAuthenticated, isLoading } = useAuth0();

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
          const className = index < 9 ? `grid-item grid-item-${index}` : "";
          return (
            <React.Fragment key={article.sys.id}>
              {isAuthenticated ? (
                <GridItem index={index} key={article.sys.id} className={className}>
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
              ) : (
                <GridItem index={index} key={article.sys.id} className={className}>
                  <Article>
                    <NeedLogIn className={`need-login-${index}`}>
                      <p>Log ind for at se artikler</p>
                    </NeedLogIn>
                  </Article>
                </GridItem>
              )}
            </React.Fragment>
          );
        })}
      </GridContainer>
    </Container>
  );
};
