import {MainNav} from './main-nav/MainNav';
import {Toasts} from './toasts/Toasts';
import React, {Suspense} from 'react';

export const PageLayout = props => (
  <>
    <MainNav />
    {props.children}
    <Toasts />
  </>
);
