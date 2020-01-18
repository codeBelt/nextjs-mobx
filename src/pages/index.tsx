// import styles from './index.module.scss';

import React from 'react';
import { Divider, Icon, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import {rootStore} from './_app';
import {LoadingIndicator} from '../components/shared/loading-indicator/LoadingIndicator';
import {MainOverview} from '../components/index-page/components/main-overview/MainOverview';
import {Actors} from '../components/index-page/components/actors/Actors';
import {PageLayout} from '../components/shared/PageLayout';

interface IProps {}

const IndexPage: React.FC<IProps> = observer((props) => {
  const { showsStore } = rootStore;
  const isRequesting = showsStore.isRequestingShowAndCast;

  return (
    <PageLayout>
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

export default IndexPage;
