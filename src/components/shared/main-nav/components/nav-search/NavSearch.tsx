// import styles from './NavSearch.module.scss';

import React, { useCallback, useState } from 'react';
import { Form, InputOnChangeData, FormProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { Routes } from '../../../../../constants/Routes';
import {useRouter} from 'next/router';

interface IProps {}

export const NavSearch: React.FC<IProps> = observer((props) => {
  const {push} = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
    setSearchTerm(data.value);
  }, []);
  const onClickSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement>, data: FormProps) => {
      push(`${Routes.Search}?term=${searchTerm}`);
      setSearchTerm('');
    },
    [push, searchTerm]
  );

  return (
    <Form onSubmit={onClickSearch}>
      <Form.Input
        name="searchTerm"
        icon={{ name: 'search', icon: 'search' }}
        placeholder="Search for Shows..."
        value={searchTerm}
        onChange={onChangeInput}
      />
    </Form>
  );
});
