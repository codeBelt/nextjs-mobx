import React from 'react';
import { ToastCard } from './ToastCard';
import { ToastStatus } from '../../../constants/ToastStatus';
import wrapWithStore from '../../../storybook-wrappers/wrap-store';

export default {
  title: 'ToastCard',
  decorators: [(storyFn) => wrapWithStore()(storyFn)],
};

export const DefaultToastCard = () => (
  <ToastCard
    item={{
      type: ToastStatus.Error,
      message: 'This is the message',
      id: 'someId',
    }}
  />
);
