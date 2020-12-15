import React, { useState, useEffect } from 'react'
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const Cosmic = require('cosmicjs')
const api = Cosmic()
// const useStyles = makeStyles((theme) => ({
//   mainContainer: {
//     width: '80%',
//     alignContent: 'center',
//   },
//   toolbar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbarTitle: {
//     flex: 1,
//   },
//   toolbarSecondary: {
//     justifyContent: 'space-between',
//     overflowX: 'auto',
//     margin: '20px 50px  ',
//   },
//     toolbarTopMenu: {
//     overflowX: 'auto',
       
//     backgroundColor: 'black',
//   },
//   toolbarLink: {
//     textTransform: 'uppercase',
//     padding: theme.spacing(1),
//     flexShrink: 0,
//   },
// }));

const bucket = api.bucket({
  slug: 'cult-grad',
  read_key: 'yXh05hTF6znrENJrTr1L7fWRN5XpgbTDrhkM1FsTkJaRMw0U7o'
})
function App() {

  const [data, setData] = useState(null);
//  const classes = useStyles();

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: 'articles',
        props: 'title,content' 
      })
      setData(data)
    };
    fetchBlog()
  }, []);
  if (!data)
    return <div>Loading...</div>
  const posts = data.objects
  return <div>
    <Container > 

    { 
    posts ? 
    posts.map(post => 
      <Paper elevation={3} ><div key={post.title} style={{margin: '50px', padding: 50}}>
                    <div
              className="doc-preview"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
        {/* <div>{post.content}</div> */}
      </div></Paper>) 
   : <h2>NO POSTS</h2> } 
   </Container>
  </div>
}
export default App;