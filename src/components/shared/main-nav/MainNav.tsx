import styles from './MainNav.module.scss';

import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { MenuNavLink } from './components/MenuNavLink';
import { Routes } from '../../../constants/Routes';
import { observer } from 'mobx-react';
import { NavSearch } from './components/nav-search/NavSearch';
import {useRouter} from 'next/router';

interface IProps {}

export const MainNav: React.FC<IProps> = observer((props) => {
  const {pathname} = useRouter();
  const hideSearchInput = pathname !== Routes.Search;

  return (
    <Segment inverted={true} className={styles.wrapper}>
      <Menu inverted={true} pointing={true} secondary={true}>
        <MenuNavLink href={Routes.Home} name="Home" pathname={pathname} />
        <MenuNavLink href={Routes.Episodes} name="Episodes" pathname={pathname} />
        <MenuNavLink href={Routes.About} name="About" pathname={pathname} />
      </Menu>
      {hideSearchInput && <NavSearch />}
    </Segment>
  );
});
