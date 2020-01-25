// import styles from './IndexPage.module.scss';

import React from 'react';
import { Divider, Icon, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { LoadingIndicator } from '../shared/loading-indicator/LoadingIndicator';
import { MainOverview } from './components/main-overview/MainOverview';
import { Actors } from './components/actors/Actors';
import { PageLayout } from '../shared/PageLayout';
import { NextPage } from 'next';
import { useRootStoreContext } from '../../stores/stores';

interface IProps {}

export const IndexPage: NextPage<IProps> = observer((props) => {
  const { showsStore } = useRootStoreContext();
  const isRequesting = showsStore.isRequestingShowAndCast;

  return (
    <PageLayout title="Home Page">
      <LoadingIndicator isActive={isRequesting}>
        <MainOverview />
        <Divider horizontal={true}>
          <Header as="h4">
            <Icon name="users" /> Cast
          </Header>
        </Divider>
        <Actors />
      </LoadingIndicator>
    </PageLayout>
  );
});
