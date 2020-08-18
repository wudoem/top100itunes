import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const MenuItem: React.SFC<{
  to: string;
  children: string | ReactElement;
}> = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);
