// import styles from './EpisodesPage.module.scss';

import React, { useEffect } from 'react';
import IEpisodeTable from '../../stores/shows/computed/IEpisodeTable';
import { LoadingIndicator } from '../shared/loading-indicator/LoadingIndicator';
import { EpisodesTable } from './components/episodes-table/EpisodesTable';
import { observer } from 'mobx-react';
import { rootStore } from '../App';
import { PageLayout } from '../shared/PageLayout';

interface IProps {}

export const EpisodesPage: React.FC<IProps> = observer((props) => {
  const { showsStore } = rootStore;

  useEffect(() => {
    showsStore.requestEpisodes();
  }, [showsStore]);

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
