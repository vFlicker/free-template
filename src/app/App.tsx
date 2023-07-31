import './styles/index.css';

import { Provider } from 'react-redux';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { TemplateChooserPage } from '~/pages/TemplateChooserPage';
import { store } from '~/store';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />

      <ConstructorPage />
      {/* <TemplateChooserPage /> */}

      <Footer />
    </Provider>
  );
}
