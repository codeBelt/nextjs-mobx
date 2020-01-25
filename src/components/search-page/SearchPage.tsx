// import styles from './SearchPage.module.scss';

import React, { useCallback, useEffect, useState } from 'react';
import environment from 'environment';
import { observer, useLocalStore } from 'mobx-react';
import { Form, InputOnChangeData, Item, Label, Icon } from 'semantic-ui-react';
import { SearchResult } from './components/search-result/SearchResult';
import { Routes } from '../../constants/Routes';
import { SearchLocalStore } from './stores/SearchLocalStore';
import { PageLayout } from '../shared/PageLayout';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface IRouteParams {
  term: 'term';
}
interface IProps {}

export const SearchPage: NextPage<IProps> = observer((props) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const searchStore = useLocalStore(SearchLocalStore, { endpoint: environment.api.showsSearch });

  useEffect(() => {
    const searchTerm = (router.query.term as string) ?? '';

    setInputValue(searchTerm);
    searchStore.search(searchTerm);
  }, [router.query, searchStore]);

  const { isRequesting, data } = searchStore.searchResults;

  const onClickSearch = useCallback(() => {
    router.push(`${Routes.Search}?term=${inputValue}`);
  }, [router.push, inputValue]);
  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
      setInputValue(data.value);
    },
    [setInputValue]
  );

  return (
    <PageLayout title="Search Page">
      <Form onSubmit={onClickSearch}>
        <Form.Input
          name="searchTerm"
          loading={isRequesting}
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          value={inputValue}
          onChange={onChangeInput}
        />
        <div>
          <Label>
            <Icon name="list" /> {searchStore.resultsText}
          </Label>
        </div>
      </Form>
      <Item.Group divided={true}>
        {data.map((model) => (
          <SearchResult key={model.id} item={model} />
        ))}
      </Item.Group>
    </PageLayout>
  );
});

// import { NextPage, NextPageContext } from 'next';
//
// const MyComponent: NextPage<MyPropsInterface> = props => (
//   // ...
// )
//
// interface Context extends NextPageContext {
//   // any modifications to the default context, e.g. query types
// }
//
// MyComponent.getInitialProps = async (ctx: Context) => {
//   // ...
//   return props
// }