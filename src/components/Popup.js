import React from 'react';
import { Button} from 'react-bootstrap';
import './Popup.css';

import bowser from '../images/bowsercollapse.webp';

export default function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <Button variant ='light' className='close-btn' onClick={() => props.setTrigger(false)}>
          x
        </Button>
        {/* {props.children} */}
        You have exceeded your goals!
        <br></br>
        <img
          src={bowser}
          alt='bowser'
          style={{ width: '25rem' }}
        />
      </div>
    </div>
  ) : (
    ''
  );
}
