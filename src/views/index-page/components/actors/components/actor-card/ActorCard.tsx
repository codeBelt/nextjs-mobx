import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import CastModel from '../../../../../../stores/shows/models/cast/CastModel';
import Link from 'next/link';
import { kebabCase } from '../../../../../../utilities/stringUtil';

interface IProps {
  readonly cardData: CastModel;
}

export const ActorCard: React.FC<IProps> = (props) => {
  const { cardData } = props;
  const urlName = kebabCase(cardData.person.name);
  const personId = cardData.person.id;
  const missingImage: string = 'https://react.semantic-ui.com/images/wireframe/image.png';
  const image: string = cardData?.character?.image?.medium ?? missingImage;

  return (
    <Card key={cardData.person.name}>
      <Card.Content>
        <Image floated="right" size="mini" src={image} />
        <Card.Header>
          <Link href="/person/[personId]/[name]" as={`/person/${personId}/${urlName}`}>
            <a>{cardData.person.name}</a>
          </Link>
        </Card.Header>
        <Card.Meta>as {cardData.character.name}</Card.Meta>
        <Card.Description>
          <strong>Birth date:</strong> {cardData.person.birthday}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
