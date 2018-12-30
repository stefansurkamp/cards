import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import AddCardButton from './components/AddCardButton';
import Header from './components/Header';
import Overview from './components/Overview';
import NewCard from './components/NewCard';
import NotFound from './components/NotFound';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Header>home</Header>
          <Switch>
            <Route exact path="/new" component={NewCard} />
            <Route exact path="/" component={Overview} />
            <Route component={NotFound} />
          </Switch>
          <Route exact path="/" component={AddCardButton} />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
