// import styles from './ToastCard.module.scss';

import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import IToast from '../../../stores/toasts/models/IToast';
import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { errorColorMap } from '../../../constants/errorColorMap';
import { useRootStoreContext } from '../../../utils/storeUtil';

interface IProps {
  readonly item: IToast;
}

export const ToastCard: React.FC<IProps> = observer((props) => {
  const { toastsStore } = useRootStoreContext();
  const { item } = props;

  const onClickRemoveNotification = useCallback(() => {
    toastsStore.remove(item.id);
  }, [item.id, toastsStore]);

  const buttonColor = errorColorMap[item.type];

  return (
    <Card>
      <Card.Content>
        <Card.Header content={item.type} />
        <Card.Description content={item.message} />
      </Card.Content>
      <Card.Content extra={true}>
        <Button color={buttonColor} onClick={onClickRemoveNotification}>
          Close
        </Button>
      </Card.Content>
    </Card>
  );
});
