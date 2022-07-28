import React from 'react';
import {
  BrowserRouter as Router,
  Routes as  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cart" element={<CartPage/>} />
        </Switch>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
