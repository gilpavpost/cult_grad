import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link  as LinkURL }from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '80%',
    alignContent: 'center',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    margin: '20px 50px  ',
  },
    toolbarTopMenu: {
    overflowX: 'auto',
       
    backgroundColor: 'black',
  },
  toolbarLink: {
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function Header() {

const classes = useStyles();
const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Лента событий', url: '#' },
  { title: 'Народный репортер', url: '#' },
  { title: 'Видео', url: '#' },
  { title: 'Реклама', url: '#' },
  { title: 'Каталог предприятий', url: '#' },
  { title: 'Контакты', url: 'About' },
];
// const sectionsTop = [
//     { icon: 'instagram.ico', url: '#' },
//     { icon: '', url: '#' },
//     { icon: '', url: '#' },
//     { icon: '', url: '#' },
//   ];
  return <div>
         <Toolbar component="nav" variant="dense" className={classes.toolbarTopMenu}>
        {sections.map((section) => (
          <Link
            color="inherit"
            backgroundColor="white"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {/* <img src={titleIco}></img> */}
          </Link>
        ))}
      </Toolbar>

          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          ><LinkURL to={section.url}>{section.title}</LinkURL>
            
          </Link>
        ))}
      </Toolbar>
        </div> }
export default Header