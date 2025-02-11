import { useState, useEffect } from "react";
import { client } from "../../Client/ContentfulClient";
import { useParams } from "react-router-dom";
import { Category } from "../../Components/Category/Category";
import { CategoryHeader } from "../../Components/Category/Category.Styled";
import { Article } from "../../Components/Article/Article";
import { AuthorName, DateAuthorContainer, ReadMore } from "../../Components/Article/Article.Styled";
import { ReleaseDate } from "../../Components/ReleaseDate/ReleaseDate";
import { Container } from "../../Components/Container/Container";
import { GridContainer } from "../../Components/GridContainer/GridContainer";
import { NavLink } from "react-router-dom";
import { GridItem } from "../../Components/GridContainer/GridContainer.Styled";

export const CategoryPage = () => {
  const { category } = useParams();
  const [categoryArticles, setCategoryArticles] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "fields.kategori": category,
      })
      .then((data) => setCategoryArticles(data))
      .catch((err) => console.log(err));
  }, [category]);

  console.log(categoryArticles);

  return (
    <Container width={"1200px"}>
      <CategoryHeader>
        <h1>{category}</h1>
      </CategoryHeader>
      <Category>
        <GridContainer>
          {categoryArticles?.items.map((article, index) => (
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
                      </ReadMore>
                    </figcaption>
                    <img src={"https:" + article.fields.billede.fields.file.url} alt="" />
                  </figure>
                </NavLink>
              </Article>
            </GridItem>
          ))}
        </GridContainer>
      </Category>
    </Container>
  );
};
