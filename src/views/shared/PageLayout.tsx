import { MainNav } from './main-nav/MainNav';
import { Toasts } from './toasts/Toasts';
import React, { Suspense } from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
}

export const PageLayout: React.FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <MainNav />
      {props.children}
      <Toasts />
    </>
  );
};
