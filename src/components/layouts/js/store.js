import { useState } from 'react';
import dataProducts from '../img/data';
import IconSwitch from './icons';
import CardsView from './cards';
import ListView from './list';

export default function Store() {
  const products = dataProducts;
  const [state, setState] = useState(true)
  var CorrectView = state ? ListView : CardsView;

  return (
    <div className='store'>
      <div className='icon_switch'>
        <IconSwitch
          icon = { state ? 'view_module' : 'view_list' }
          onSwitch = {() => {
            setState(current => !current)
            }}/>
      </div>
      <div className='view'>
        <CorrectView 
          cards = { products }
          items = { products }
        />
      </div>
    </div>
  );
};
