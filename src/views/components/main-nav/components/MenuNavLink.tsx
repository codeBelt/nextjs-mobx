import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../../constants/Routes';
import { StrictMenuItemProps } from 'semantic-ui-react';

interface Props extends StrictMenuItemProps {
  to: Routes;
  label: string;
}

export const MenuNavLink: React.FC<Props> = (props) => {
  const { to, label, className } = props;

  return (
    <Link href={to}>
      <a className={className}>{label}</a>
    </Link>
  );
};
