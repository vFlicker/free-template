import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { TemplateChooserPage } from '~/pages/TemplateChooserPage';
import { AppRoute } from '~/shared/constants';
import { store } from '~/store';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ToastContainer />

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={AppRoute.ROOT} element={<TemplateChooserPage />} />
          <Route path={AppRoute.CONSTRUCTOR} element={<ConstructorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
