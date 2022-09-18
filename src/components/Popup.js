import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import Contact from '../pages/Contact';

import '../styles/Popup.css';

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="light"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </Button>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}
