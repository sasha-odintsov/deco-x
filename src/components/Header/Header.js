import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from 'react-redux';
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
  const items = useSelector((state) => state.cart)
  
  return (
    <AppBar 
    position="static" 
    color='transparent' 
    sx={{ position: 'absolute', top: '0', borderBottom: '1px solid #5f5f5f', boxShadow: '0'}}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Drawer open={open} onClose={() => {setOpen(false)}} 
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => {setOpen(false)}}>
                <ChevronLeftIcon sx={{ color: 'text.grey', ':hover': { color: '#fff' } }}/>
              </IconButton>
            </Box>
            <Divider color='#c4c4c4'/>
            <Box>
            <List>
              {pages.map((page) => 
              (<ListItem key={page.name}>
                <Link 
                sx={{ ':hover': { color: '#fff'}, textTransform: 'uppercase' }}
                component={RouterLink}
                underline="none" 
                color='text.grey'
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
              <MenuIcon sx={{ ':hover': { color: 'text.secondary'} }}/>
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
              sx={{ 
              p: '25px 10px', 
              borderBottom: '2px solid transparent', 
              textTransform: 'uppercase', 
              ':hover': 
              { color: 'text.secondary', borderBottom: '2px solid #ccc'} 
            }}
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
            variant='outlined'
            endIcon={
              <Badge badgeContent={items.length}>
                <LocalMallIcon />
              </Badge>
            } 
            component={RouterLink}
            to="/cart"
            sx={{
              display: { sm: 'flex', xs: 'none' }, py: '7px'
            }}
            >
              CART
            </Button>
            <IconButton 
            color='primary'
            variant='text'
            component={RouterLink}
            to="/cart"
            sx={{
              display: { sm: 'none' }
            }}
            >
              <Badge badgeContent={items.length}>
                <LocalMallIcon />
              </Badge>
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;