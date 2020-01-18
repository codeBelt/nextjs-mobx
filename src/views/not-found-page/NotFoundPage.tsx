import styles from './NotFoundPage.module.scss';

import React from 'react';

interface IProps {}

const NotFoundPage: React.FC<IProps> = (props) => {
  return <div className={styles.wrapper}>Not found page</div>;
};

export default NotFoundPage;
