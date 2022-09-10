import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from '../MainPage/MainPage';
import Deco from '../Deco/Deco';
import About from '../About/About';
import Furniture from '../Furniture/Furniture';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';
import Layout from '../Layout/Layout';

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Barlow',
      'sans-serif',
    ].join(','),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#bddabc",
    },
    text: {
      dark: '#1b372d',
      grey: '#818181'
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#bddabc"
        }
      }
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#1b372d",
            color: '#fff',
          }
        }
      }
    }
  }
});

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage/>}/>
              <Route path='home-decoration' element={<Deco/>}/>
              <Route path='furniture' element={<Furniture/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='furniture/:id' element={<ProductDetails category={'furniture'}/>}/>
              <Route path='home-decoration/:id' element={<ProductDetails category={'home-decoration'}/>}/>
            </Route>
          </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
