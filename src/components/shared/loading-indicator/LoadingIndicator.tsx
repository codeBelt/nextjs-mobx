import styles from './LoadingIndicator.module.scss';

import React from 'react';
import { Loader } from 'semantic-ui-react';

interface IProps {
  readonly isActive?: boolean;
}
export const LoadingIndicator: React.FC<IProps> = (props) => {
  const { isActive = false, children } = props;
  const cssClasses = isActive ? styles.wrapper : undefined;

  return (
    <div className={cssClasses}>
      {isActive && (
        <div className={styles.loaderContainer}>
          <Loader content="Loading" active={true} inverted={true} size="huge" />
        </div>
      )}
      {children}
    </div>
  );
};
