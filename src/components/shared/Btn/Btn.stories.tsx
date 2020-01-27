import React from 'react';
import { storiesOf } from '@storybook/react';
import Btn from './Btn';

storiesOf('Button', module).add('with text', () => {
  return <Btn text="Robert is cool" />;
});
