import { useState } from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';


// const useStyles = makeStyles((theme) => ({
//   link: {
//     marginRight: '20px'
//   }
// }));
const pages = [
  { name: "Prod1", href: "" },
  { name: "Prod2", href: "" },
  { name: "About", href: "" },
]

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static" color='transparent' sx={{ background: 'rgba(0,0,0,.3)', borderBottom: '1px solid #aaa', boxShadow: '0'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Drawer open={open} onClose={() => {setOpen(false)}}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => {setOpen(false)}}>
                <ChevronLeftIcon sx={{ ':hover': { color: '#aaa'} }}/>
              </IconButton>
            </Box>
            <Divider />
            <Box>
            <List>
              {pages.map((page) => 
              (<ListItem>
                <Link 
                key={page.name}
                sx={{ ':hover': { color: '#ccc'} }}
                variant="button" 
                underline="none" 
                color='inherit'
                href={page.href}
                >
                  {page.name}
                </Link>
              </ListItem>
              ))}
            </List>
            </Box>
          </Drawer>
          <Box sx={{ display: { md: 'none' }}}>
            <IconButton onClick={() => {setOpen(true)}}>
              <MenuIcon sx={{ ':hover': { color: '#ccc'} }}/>
            </IconButton>
          </Box> 
          <Typography
          variant="h5"
          component="a"
          href=""
          sx={{ 
          textDecoration: 'none', 
          marginRight: 'auto', 
          color: 'inherit', 
          display: { xs: 'none', md: 'flex' } 
          }}
          >
            DECO X
          </Typography>
          <Typography
          variant="h5"
          component="a"
          href=""
          sx={{ 
          textDecoration: 'none', 
          justifyContent: 'center',
          margin: 'auto', 
          color: 'inherit',
          display: { xs: 'flex', md: 'none' }
          }}
          >
            DECO X
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '50px' }}>
            {pages.map((page) => 
            (<Link 
              key={page.name}
              sx={{ p: '20px 10px', borderBottom: '2px solid transparent', ':hover': { color: '#ccc', borderBottom: '2px solid #ccc'} }}
              variant="button" 
              underline="none" 
              color='inherit'
              href={page.href}
              >
                {page.name}
              </Link>))}
          </Box>
            <Button color='primary' variant="outlined" endIcon={<LocalMallIcon />}>CART</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;