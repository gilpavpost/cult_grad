import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Television from "./components/tv";
import useStyles from "./components/styles/main_styles";

const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "cult-grad",
  read_key: "yXh05hTF6znrENJrTr1L7fWRN5XpgbTDrhkM1FsTkJaRMw0U7o",
});

function App() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: "videos",
        props: "title,content,metadata",
        limit: 1,
      });
      setData(data);
    };
    fetchBlog();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Container className={classes.container}>
      <Typography className={classes.text_big}>Новостной портал СМИ "Культурный Город" </Typography>
      <Television element={data} />
    </Container>
  );
}
export default App;
