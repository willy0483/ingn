import { useEffect, useState } from "react";
import { client } from "../../Client/ContentfulClient";
import { NavLink } from "react-router-dom";

import { Article} from "../../Components/Article/Article";
import { AuthorName,DateAuthorContainer } from "../../Components/Article/Article.Styled";
import { ReleaseDate } from "../../Components/ReleaseDate/ReleaseDate";
import { Container } from "../../Components/Container/Container";
import { GridContainer } from "../../Components/GridContainer/GridContainer";

export const HomePage = () => {

  const [articleData , setArticleData] = useState();

  useEffect(()=>{
    client
      .getEntries({
        content_type: "article",
      })
      .then((data) => setArticleData(data))
      .catch((error) => console.log(error));
  },[])

  console.log(articleData);

  return (
    <Container width={"1200px"}>
      <GridContainer>
      {articleData?.items?.map((article, index) => {
        return (
          <div className={`grid-item grid-item-${index}`}>
          <Article >
          <NavLink to={`/details/${article.sys.id}`} key={article.sys.id}>
              <figure>
                <figcaption>
                  <h2>{article.fields.overskrift}</h2>
                  {article.fields.underrubrik ? <h3>{article.fields.underrubrik}</h3> : ""}
                  
                  <DateAuthorContainer>
                    <ReleaseDate dateString={article.fields.dato}></ReleaseDate>
                    <span> - </span>
                    <AuthorName>{article.fields.forfatter}</AuthorName>
                  </DateAuthorContainer>
                </figcaption>
                <img src={"https:" + article.fields.billede.fields.file.url} alt="" />
              </figure>
          </NavLink>
          </Article>
          </div>
        );
      })}
      </GridContainer>
    </Container>
  );
};
