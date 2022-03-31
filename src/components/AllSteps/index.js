import { memo, useCallback, useState, useContext } from 'react';
import { useDrop, DndProvider } from 'react-dnd';
import List from '@mui/material/List';
import update from 'immutability-helper';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Step from '../Step';
import { ItemTypes } from '../../ItemTypes';
import { StepContext } from '../../providers/StepProvider';

const AllSteps = memo(function () {
  const { variablesState } = useContext(StepContext);

  // console.log('variablesState', variablesState);

  const [cards, setCards] = useState(variablesState.steps);

  const findCard = useCallback(
    (Id) => {
      const card = cards.filter((c) => `${c.Id}` === Id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);

      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));

  return (
    <List ref={drop}>
      {cards.map((step) => (
        <Step
          key={step.Id}
          Id={`${step.Id}`}
          Name={step.Name}
          StepOrder={step.StepOrder}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </List>
  );
});

const AllStepsProvider = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <AllSteps />
    </DndProvider>
  );
};

export default AllStepsProvider;
