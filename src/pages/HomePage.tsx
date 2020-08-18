import React, { FunctionComponent } from 'react';

interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="px-4">
      Welcome. Please select link from menu above to see top of 100 albums
      available on itunes.
    </div>
  );
};
