import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPages} from '../../pages/main/main-page.tsx';
import {LoginPage} from '../../pages/login/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites/favorites-page.tsx';
import {OfferPage} from '../../pages/offer/offer-page.tsx';
import {ErrorMessage} from '../error-message/error-message';
import {AppRoute, TitleDescription} from '../../const';
import {AuthorizationRoute} from '../authorization-route/authorization-route';
import {useAppDispatch} from '../../hooks/use-store';
import {fetchOffersAction} from '../../services/thunk/fetch-offers';
import {checkAuthAction} from '../../services/thunk/check-auth-action';
import {RedirectFavoriteComponent} from '../redirect-favorite/redirect-favorite.tsx';
import {useEffect} from 'react';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${AppRoute.Main}`}
          element ={
            <MainPages title = {TitleDescription.MainPage}/>
          }
        />
        <Route
          path={AppRoute.Login}
          element ={
            <AuthorizationRoute>
              <LoginPage title = {TitleDescription.LoginPage}/>
            </AuthorizationRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element ={
            <RedirectFavoriteComponent>
              <FavoritesPage title = {TitleDescription.FavoritePage}/>
            </RedirectFavoriteComponent>
          }
        />
        <Route
          path= { `${AppRoute.Offer}/:offerId`}
          element={
            <OfferPage title = {TitleDescription.OfferPage}/>
          }
        />
        <Route
          path={AppRoute.Error}
          element ={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
        />
        <Route
          path="*"
          element={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
