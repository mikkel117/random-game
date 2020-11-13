import React, { useContext, useState } from 'react';
import PlaceHolderImg from '../img/200x239.png';
import { EnemyContext } from '../context/enemy';
import { HeroContext } from '../context/hero';

export default function Home() {
  const [enemyDetailsChack, setEnemyDetailsChack] = useState(false);
  const [enemyAttack, setEnemyAttack] = useState('');
  const [enemyHealth, setEnemyHealth] = useState('');
  const [heroDead, setHeroDead] = useState(false)
  const { enemy, isEnemy, setIsEnemy, setStart, start } = useContext(EnemyContext);
  const { heroHealth, heroAttack, setHeroHealth } = useContext(HeroContext);

  let enemyAttackHolder;
  let enemyHealthHolder;

  if (enemyDetailsChack === false) {
    enemyAttackHolder = enemy[0].attack;
    enemyHealthHolder = enemy[0].health;
    setEnemyAttack(enemyAttackHolder);
    setEnemyHealth(enemyHealthHolder);
    setEnemyDetailsChack(true);
  }

 const test = () => {
   setEnemyHealth(enemyHealth-heroAttack)
   setHeroHealth(heroHealth-enemyAttack)
 }
if(isEnemy === true){
 if(enemyHealth === 0 || enemyHealth < 0){
   setIsEnemy(false);
 }
}

if(heroDead === false){
  if(heroHealth === 0 || heroHealth < 0){
    setHeroDead(true)
  }
}

  return (
    <>
      {isEnemy ? (
        <>
          <div className="enemy-card">
            {enemy.map((enemy) => {
              return (
                <div key={enemy.id}>
                  <img src={enemy.img} alt="" />
                  {enemy.title}
                  <p className="attack-health-w">
                    <span className="attack">{enemyAttack}</span>
                    <span className="health">{enemyHealth}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="enemy-card"></div>
      )}
      {isEnemy ? (
        <button
          onClick={() => {
            enemyAttackHolder = '';
            enemyHealthHolder = '';
            // setIsEnemy(false);
            test()
          }}
          className="ready"
        >
          Attack
        </button>
      ) : (
        <button
          onClick={() => {
            setStart(false);
            setEnemyDetailsChack(false);
          }}
          className="ready"
        >
          Next Battle
        </button>
      )}

      <button onClick={() => {
        setHeroDead(true)
      }}>kill hero</button>

<div className="hero-card">
                <div>
                  <img src={PlaceHolderImg} alt="" />
                  <p className="attack-health-w">
                    <span className="attack">{heroAttack}</span>
                    <span className="health">{heroHealth}</span>
                  </p>
                </div>
          </div>

{heroDead ? (
        <div className="pokemon-data-overlaye">
          <div className="modal-content">
            <button onClick={() => {
          setHeroDead(false)
      }} className="close">restart</button>
      <p>som text</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
