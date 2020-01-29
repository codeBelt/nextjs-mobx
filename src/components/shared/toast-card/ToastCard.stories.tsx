import React from 'react';
import { ToastCard } from './ToastCard';
import { ToastStatus } from '../../../constants/ToastStatus';

export default {
  title: 'ToastCard',
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
