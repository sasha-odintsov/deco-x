import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
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
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const pages = [
  { name: "About", href: "/about" },
  { name: "Decoration", href: "/home-decoration" },
  { name: "Furniture", href: "/furniture" },
]

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar 
    position="static" 
    color='transparent' 
    sx={{ position: 'absolute', top: '0', borderBottom: '1px solid #5f5f5f', boxShadow: '0'}}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Drawer open={open} onClose={() => {setOpen(false)}} 
          // PaperProps={{
          //   sx: {
          //   backgroundColor: "pink",
          //   color: "red",
          //   }
          // }}
          >
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
                sx={{ ':hover': { color: '#ccc'}, textTransform: 'uppercase' }}
                component={RouterLink}
                underline="none" 
                color='inherit'
                to={page.href}
                onClick={() => {setOpen(false)}}
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
          component={RouterLink}
          to="/"
          sx={{ 
          textDecoration: 'none', 
          marginRight: 'auto', 
          color: 'inherit', 
          fontFamily: 'monospace',
          letterSpacing: '.3rem',
          display: { xs: 'none', md: 'flex' } 
          }}
          >
            DECO X
          </Typography>
          <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{ 
          textDecoration: 'none', 
          justifyContent: 'center',
          fontFamily: 'monospace',
          letterSpacing: '.3rem',
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
              variant="body2"
              sx={{ p: '25px 10px', borderBottom: '2px solid transparent', textTransform: 'uppercase', ':hover': { color: '#ccc', borderBottom: '2px solid #ccc'} }}
              component={RouterLink}
              underline="none" 
              color='inherit'
              to={page.href}
              >
                {page.name}
              </Link>))}
          </Box>
            <Button 
            color='primary'
            variant="outlined"
            endIcon={
              <Badge badgeContent={0}>
                <LocalMallIcon />
              </Badge>
          } 
            component={RouterLink}
            to="/cart"
            >
              CART
            </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;