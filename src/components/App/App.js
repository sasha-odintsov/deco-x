import './App.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
