import './styles/index.css';

import { useState } from 'react';

import { Header } from '~/components/Header';
import { Modal } from '~/components/Modal';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { DownloadPage } from '~/pages/DownloadPage';
import { PayMethodsPage } from '~/pages/PayMethodsPage';
import { SettingsPage } from '~/pages/SettingsPage';
import { VariablesPage } from '~/pages/VariablesPage';

import classes from './App.module.css';

export function App(): JSX.Element {
  return (
    <>
      <div className={classes.container}>
        <Header />

        <main className={classes.main}>
          {/* <ConstructorPage /> */}
          {/* <SettingsPage /> */}
          <PayMethodsPage />
          {/* <VariablesPage /> */}
          {/* <DownloadPage /> */}
        </main>
      </div>
    </>
  );
}
