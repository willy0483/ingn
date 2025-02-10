import { useState,useEffect } from "react"
import { client } from "../../Client/ContentfulClient"
import { useParams } from "react-router-dom"


export const Detailspage = () =>{
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
        <section>
            <div>{articleDetails?.items[0]?.fields.overskrift}</div>
        </section>
    )
}