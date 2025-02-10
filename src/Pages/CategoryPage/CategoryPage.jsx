import { useState, useEffect } from "react";
import { client } from "../../Client/ContentfulClient";
import { useParams } from "react-router-dom";

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
        <section>
            {categoryArticles?.items.map((article) => (
                <div key={article.sys.id}>{article.fields.overskrift}</div>
            ))}
        </section>
    );
};