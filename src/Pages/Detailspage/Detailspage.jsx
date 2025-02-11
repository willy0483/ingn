import { useState, useEffect } from "react";
import { client } from "../../Client/ContentfulClient";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Details } from "../../Components/Details/Details";
import { Container } from "../../Components/Container/Container";
import { AuthorName, DateAuthorContainer } from "../../Components/Article/Article.Styled";
import { ReleaseDate } from "../../Components/ReleaseDate/ReleaseDate";

export const Detailspage = () => {
  const { articleID } = useParams();
  const [articleDetails, setArticleDetails] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "sys.id": articleID,
      })
      .then((data) => setArticleDetails(data))
      .catch((err) => console.log(err));
  }, [articleID]);

  console.log(articleDetails);

  return (
    <Container width={"1200px"}>
      <Details>
        {articleDetails?.items?.map((article) => {
          return (
            <div key={article.sys.id}>
              <figure>
                <img
                  src={article.fields.billede.fields.file.url}
                  alt={article.fields.billede.fields.file.fileName}
                />
                <figcaption>
                  <h1>{article.fields.overskrift}</h1>
                  {article.fields.underrubrik ? <p>{article.fields.underrubrik}</p> : ""}
                  <DateAuthorContainer>
                    <ReleaseDate dateString={article.fields.dato}></ReleaseDate>
                    <span> - </span>
                    <AuthorName>{article.fields.forfatter}</AuthorName>
                  </DateAuthorContainer>
                  <article>{documentToReactComponents(article.fields.indhold)};</article>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </Details>
    </Container>
  );
};
