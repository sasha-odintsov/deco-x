import './App.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Deco from '../Deco/Deco';
import About from '../About/About';
import Furniture from '../Furniture/Furniture';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#bddabc",
         
        }
      }
    }
  }
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/deco' element={<Deco/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/ >
    </ThemeProvider>
    </>
  );
}

export default App;
