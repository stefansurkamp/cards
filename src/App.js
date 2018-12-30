import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './components/Card';
import AddCardButton from './components/AddCardButton';
import Column from './components/Column';
import Header from './components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>home</Header>
        <div>
          <Column title="Magro">
            <Card size="s">
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
            <Card size="m" title="This is actually nice">
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
            <Card
              size="m"
              title="This is actually niceThis is actually niceThis is actually niceThis is actually niceThis is actually nice"
            >
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
            <Card size="m" />
          </Column>

          <Column title="Grasso">
            <Card size="s">
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
            <Card size="s">
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
            <Card size="s">
              Lorem ipsum malesuada himenaeos malesuada maecenas eu neque
              placerat quisque etiam pretium a tortor mattis orci donec
              consequat convallis gravida taciti lobortis. In leo conubia mi
              odio taciti, feugiat etiam mattis donec interdum fringilla, ligula
              aptent volutpat primis cubilia et cras euismod dictum arcu odio
              ligula porta nostra felis interdum. Tempor libero interdum sodales
              donec neque molestie mi proin congue donec, curabitur sociosqu
              sagittis malesuada sapien bibendum per purus lectus faucibus,
              suscipit lorem luctus scelerisque fermentum ultricies suspendisse
              donec vitae. Placerat erat lectus a adipiscing donec diam neque,
              suscipit posuere semper suspendisse leo vehicula mi lacus, duis
              tortor imperdiet luctus felis inceptos nullam conubia hendrerit
              donec nam donec aliquet consequat tincidunt. Elit curae ut taciti
              curae aliquet ac suscipit fames porta etiam habitasse a nisl,
              habitasse sapien commodo massa aenean eros et conubia gravida et
              pulvinar.
            </Card>
          </Column>
        </div>
        <AddCardButton />
      </Wrapper>
    );
  }
}

export default App;
