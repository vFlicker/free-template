import './styles/index.css';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { DownloadPage } from '~/pages/DownloadPage';
import { PayMethodsPage } from '~/pages/PayMethodsPage';
import { SettingsPage } from '~/pages/SettingsPage';
import { TemplateChooserPage } from '~/pages/TemplateChooserPage';
import { VariablesPage } from '~/pages/VariablesPage';

export function App(): JSX.Element {
  return (
    <>
      <Header />

      {/* <ConstructorPage /> */}
      {/* <SettingsPage /> */}
      {/* <PayMethodsPage /> */}
      {/* <VariablesPage /> */}
      {/* <DownloadPage /> */}
      <TemplateChooserPage />

      <Footer />
    </>
  );
}
