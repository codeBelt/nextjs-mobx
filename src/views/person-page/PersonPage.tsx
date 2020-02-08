// import styles from './PersonPage.module.scss';

import React from 'react';
import { observer } from 'mobx-react';
import { PageLayout } from '../shared/PageLayout';
import { NextPage, NextPageContext } from 'next';
import { PersonLocalStore } from './stores/PersonLocalStore';

interface IProps {}

export const PersonPage: NextPage<IProps> = observer((props) => {
  return (
    <PageLayout title="Person Page">
      <div>TODO</div>
    </PageLayout>
  );
});

PersonPage.getInitialProps = async (content: NextPageContext) => {
  const { personId, name } = content.query; // TODO: figure out query typing
  const personLocalStore = PersonLocalStore();

  await personLocalStore.getPerson(personId as string);

  return {
    personLocalStore: personLocalStore.person,
  };
};
