import '../styles/tailwind.scss';

import React from 'react';
import { useRouteMatch } from 'react-router';

import { MenuItem } from './MenuItem';

export const Layout: React.SFC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const match = useRouteMatch();
  return (
    <div className="container mx-auto">
      <nav>
        <ul className="flex flex-row flex-wrap justify-between px-4 py-8 border-b mb-4">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/list">Top 100</MenuItem>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};
