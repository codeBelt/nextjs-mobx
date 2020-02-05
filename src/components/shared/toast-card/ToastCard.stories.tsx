import React from 'react';
import { ToastCard } from './ToastCard';
import { ToastStatus } from '../../../constants/ToastStatus';
import { wrapWithStore } from '../../../../.storybook/mocks/wrapWithStore';

export default {
  title: 'ToastCard',
  decorators: [(storyFn) => wrapWithStore()(storyFn)],
};

export const SuccessToastCard = () => (
  <ToastCard
    item={{
      type: ToastStatus.Success,
      message: 'This is the message',
      id: 'someId',
    }}
  />
);

export const WarningToastCard = () => (
  <ToastCard
    item={{
      type: ToastStatus.Warning,
      message: 'This is the message',
      id: 'someId',
    }}
  />
);

export const ErrorToastCard = () => (
  <ToastCard
    item={{
      type: ToastStatus.Error,
      message: 'This is the message',
      id: 'someId',
    }}
  />
);
