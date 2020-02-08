// import styles from './EpisodesPage.module.scss';

import React from 'react';
import IEpisodeTable from '../../stores/shows/computed/IEpisodeTable';
import { LoadingIndicator } from '../shared/loading-indicator/LoadingIndicator';
import { EpisodesTable } from './components/episodes-table/EpisodesTable';
import { observer } from 'mobx-react';
import { PageLayout } from '../shared/PageLayout';
import { getRootStore, useRootStoreContext } from '../../utils/storeUtil';
import { NextPage, NextPageContext } from 'next';

interface IProps {}

export const EpisodesPage: NextPage<IProps> = observer((props) => {
  const { showsStore } = useRootStoreContext();
  const { isRequesting } = showsStore.episodes;
  const episodeTables = showsStore.selectEpisodes;

  return (
    <PageLayout title="Episodes Page">
      <LoadingIndicator isActive={isRequesting} />
      {episodeTables.map((model: IEpisodeTable) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </PageLayout>
  );
});

EpisodesPage.getInitialProps = async (content: NextPageContext) => {
  const { showsStore } = getRootStore();

  await showsStore.requestEpisodes();

  return {
    showsStore: {
      episodes: showsStore.episodes,
    },
  };
};