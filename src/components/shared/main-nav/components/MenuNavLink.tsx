import React from 'react';
import Link from 'next/link';
import {Routes} from '../../../../constants/Routes';
import {Menu} from 'semantic-ui-react';

interface Props {
  href: Routes;
  name: string;
  pathname: string;
}

export const MenuNavLink: React.FC<Props> = (props) => {
  const {href, name, pathname} = props;

  return  (
    <Menu.Item active={href === pathname}>
      <Link href={href}><a>{name}</a></Link>
    </Menu.Item>
  )
};
