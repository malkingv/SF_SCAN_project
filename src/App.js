import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./Views/MainPage/MainPage";
import AuthPage from "./Views/AuthPage/AuthPage";
import SearchPage from "./Views/SearchPage/SearchPage";
import ResultPage from "./Views/ResultPage/ResultPage";
import "./style.css"
import store from "./store/store";

import {Provider, useSelector} from "react-redux";
import DefaultPage from "./Views/DefaultPage";


function RequireAuth({ children, redirectTo }) {
    const state = useSelector((state) => state)
    return state.authenticated ?  children : <Navigate to={redirectTo}/> ;
}

const App = () => {

useEffect(() => {
    alert('Клиентская часть сервиса состоит из: главной страницы, формы авторизации, формы для ввода параметров запроса, страницы с выводом результатов запроса. \nОстальные страницы в данной работе не были предусмотрены для реализации.')
  }, [])
    
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Header />
              <AppWrapper>
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/auth" element={<AuthPage />} />
                      <Route path="/search" element={
                            <RequireAuth redirectTo="/auth">
                                <SearchPage />
                            </RequireAuth>
                          }
                      />
                      <Route path="/result" element={
                            <RequireAuth redirectTo="/auth">
                                <ResultPage />
                            </RequireAuth>
                          }
                      />
                      <Route path="*" element={<DefaultPage />} />
                  </Routes>
              </AppWrapper>
              <Footer/>
          </Provider>
      </BrowserRouter>
  );
}
export default App;

const AppWrapper = styled.div`
  margin: 0 auto;
  font-family: Inter, sans-serif;
  letter-spacing: 0.01em;

  max-width: 1320px;
  padding: 0 60px;
  min-height: calc(100vh - 230px);
  
  .ferry-text{
    font-family: 'Ferry Black', sans-serif;
    text-transform: uppercase;
  }

  @media (max-width: 1439px) {
    max-width: 335px;
    padding: 0 26px 0 14px;
    overflow: hidden;
  }
  
`;
