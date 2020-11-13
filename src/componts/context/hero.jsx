import React, { createContext } from 'react'
import { useState } from 'react';

export const HeroContext = createContext();

const Hero = (props) => {
const [heroHealth, setHeroHealth] = useState(15);
const [heroAttack, setHeroAttack] = useState(2);


    return(
        <HeroContext.Provider value={{ heroAttack, heroHealth, setHeroHealth, setHeroAttack }}>
        {props.children}
        </HeroContext.Provider>
    )
}

export default Hero;