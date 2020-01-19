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
        <Menu.Item as={MenuNavLink} to={Routes.Home} label="Home" active={pathname === Routes.Home} />
        <Menu.Item as={MenuNavLink} to={Routes.Episodes} label="Episodes" active={pathname === Routes.Episodes} />
        <Menu.Item as={MenuNavLink} to={Routes.About} label="About" active={pathname === Routes.About} />
      </Menu>
      {hideSearchInput && <NavSearch />}
    </Segment>
  );
});
