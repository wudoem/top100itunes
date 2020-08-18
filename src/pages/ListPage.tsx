import { useItunes } from '@@Hooks/useItunes';
import React, { FunctionComponent } from 'react';

import { ItunesList } from '../components/ItunesList';

interface ListPageProps {}

export const ListPage: FunctionComponent<ListPageProps> = () => {
  const { tunes } = useItunes();

  return (
    <>
      <ItunesList />
    </>
  );
};
