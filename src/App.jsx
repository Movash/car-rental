import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};
