import './App.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Deco from '../Deco/Deco';
import About from '../About/About';
import Furniture from '../Furniture/Furniture';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import ProductDetails from '../ProductDetails/ProductDetails';

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
      dark: '#1b372d'
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#bddabc"
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
          <Header />
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/home-decoration' element={<Deco/>}/>
            <Route path='/furniture' element={<Furniture/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/furniture/:id' element={<ProductDetails category={'furniture'}/>}/>
            <Route path='/home-decoration/:id' element={<ProductDetails category={'home-decoration'}/>}/>
          </Routes>
          <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
