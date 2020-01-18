// import styles from './search.module.scss';

import React, { useCallback, useEffect, useState } from 'react';
import environment from 'environment';
import { observer, useLocalStore } from 'mobx-react';
import { Form, InputOnChangeData, Item, Label, Icon } from 'semantic-ui-react';
import { SearchResult } from '../components/search-page/components/search-result/SearchResult';
import { Routes } from '../constants/Routes';
import { SearchLocalStore } from '../components/search-page/stores/SearchLocalStore';
import {PageLayout} from '../components/shared/PageLayout';
import {Router, useRouter} from 'next/router';

interface IRouteParams {
  term: 'term';
}
interface IProps {}

const SearchPage: React.FC<IProps> = observer((props) => {
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
    router.push(`${Routes.Search}?term=${inputValue}`)
  }, [router.push, inputValue]);
  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
      setInputValue(data.value);
    },
    [setInputValue]
  );

  return (
    <PageLayout>
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

export default SearchPage;
