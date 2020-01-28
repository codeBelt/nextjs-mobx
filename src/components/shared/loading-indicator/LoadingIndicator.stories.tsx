import React from 'react';
import { LoadingIndicator } from './LoadingIndicator';

export default {
  title: 'LoadingIndicator',
};

export const ActiveWithComponent = () => (
  <LoadingIndicator isActive={true}>
    <div>Some Component</div>
  </LoadingIndicator>
);

export const UnactiveWithComponent = () => (
  <LoadingIndicator isActive={false}>
    <div>Some Component</div>
  </LoadingIndicator>
);

export const ActiveWithoutComponent = () => <LoadingIndicator isActive={true}></LoadingIndicator>;

export const UnactiveWithoutComponent = () => <LoadingIndicator isActive={false}></LoadingIndicator>;
