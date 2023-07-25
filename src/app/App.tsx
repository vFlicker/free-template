import './styles/index.css';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { TemplateChooserPage } from '~/pages/TemplateChooserPage';

export function App(): JSX.Element {
  return (
    <>
      <Header />

      <ConstructorPage />
      {/* <TemplateChooserPage /> */}

      <Footer />
    </>
  );
}
