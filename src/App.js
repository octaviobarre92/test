import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { userRoutes } from "./routers"
import NotFound from './pages/Error/NotFound';
import Login from './pages/Login/Login';
import LayoutVertical from './components/LayoutVertical';
import Header from './components/Header';
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectors as selectorLogin } from "./store/reducers/login"

const App = ({ hasLogged }) => {
  return (
    <>
      {/* {hasLogged && <Header />} */}
      <BrowserRouter>
        <Routes>
          {userRoutes.map((route) => (
            <Route path={route.path} element={true ? route.component : <Login />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  hasLogged: selectorLogin.getHasLogged(state),
})
export default connect(mapStateToProps, null)(App)