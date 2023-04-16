import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../modules/main/index';

const useRoute = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default useRoute;
