import React from 'react';
import {Toasts} from './Toasts';
import {wrapWithStore} from '../../../../.storybook/mocks/wrapWithStore';
import {useRootStoreContext} from '../../../utilities/storeUtil';
import {Button} from 'semantic-ui-react';
import {ToastStatus} from '../../../constants/ToastStatus';

export default {
  title: 'Toasts',
  decorators: [(storyFn) => wrapWithStore()(storyFn)],
};

export const DefaultToasts = () => {
  const { toastsStore } = useRootStoreContext();

  return (
    <div>
      <Toasts />
      <Button
        onClick={() => toastsStore.add('message', ToastStatus.Success)}
      >
        Click me to show a toast
      </Button>
    </div>
  )
};
