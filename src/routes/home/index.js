import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../../pages';

export default () => (<Route component={Home} exact={true} />);