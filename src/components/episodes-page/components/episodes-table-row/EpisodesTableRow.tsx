import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import IEpisodeTableRow from '../../../../stores/shows/computed/IEpisodeTableRow';

interface IProps {
  readonly rowData: IEpisodeTableRow;
}

export const EpisodesTableRow: React.FC<IProps> = (props) => {
  const { rowData } = props;

  return (
    <Table.Row key={rowData.episode}>
      <Table.Cell>
        <Image src={rowData.image} rounded={true} size="small" />
      </Table.Cell>
      <Table.Cell>{rowData.episode}</Table.Cell>
      <Table.Cell>{rowData.date}</Table.Cell>
      <Table.Cell>{rowData.name}</Table.Cell>
    </Table.Row>
  );
};
