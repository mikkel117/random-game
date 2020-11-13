import React, { useState, createContext } from 'react';
import PlaceHolderImg from '../img/200x239.png';

export const EnemyContext = createContext();

const GetRandomEnemy = (props) => {
  const [start, setStart] = useState(false);
  const [random, setRandom] = useState('');
  const [isEnemy, setIsEnemy] = useState(false);

  let max = 3;
  if (start === false) {
    setRandom(Math.floor(Math.random() * max));
    setIsEnemy(true);
    setStart(true);
  }

  let enemy;
  switch (random) {
    case 0:
      enemy = [
        {
          title: 'name of the wind',
          id: 1,
          img: PlaceHolderImg,
          attack: 1,
          health: 5,
        },
      ];
      break;
    case 1:
      enemy = [
        {
          title: 'name of the 2',
          id: 2,
          img: PlaceHolderImg,
          attack: 3,
          health: 8,
        },
      ];
      break;
    case 2:
      enemy = [
        {
          title: 'name of the 3',
          id: 3,
          img: PlaceHolderImg,
          attack: 5,
          health: 8,
        },
      ];
      break;

    default:
      break;
  }
  return (
    <EnemyContext.Provider value={{ enemy, isEnemy, setIsEnemy, setStart, start }}>
      {props.children}
    </EnemyContext.Provider>
  );
};

export default GetRandomEnemy;
