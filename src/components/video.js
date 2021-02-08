import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "cult-grad",
  read_key: "yXh05hTF6znrENJrTr1L7fWRN5XpgbTDrhkM1FsTkJaRMw0U7o",
});

function Videos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: "videos",
        props: "title,content",
      });
      setData(data);
    };
    fetchBlog();
  }, []);
  if (!data) return <div>Loading...</div>;
  const posts = data.objects;
  return (
    <div>
      <Container>
        {posts ? (
          posts.map((post) => (
            <Paper>
              <div key={post.title}>
                <div
                  className="doc-preview"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                />
              </div>
            </Paper>
          ))
        ) : (
          <h2>NO POSTS</h2>
        )}
      </Container>
    </div>
  );
}
export default Videos;
