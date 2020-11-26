import React, { useState } from 'react';
import './App.css';
import '../src/index.css';
import { Button, IconButton } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          icon={<HighlightOffSharpIcon color='secondary' />}
          checkedIcon={<SaveIcon />}
          color='primary'
          imputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
};

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='hero'>
        <Typography variant='h2' component='h2'>
          Vanessa Brasfield
        </Typography>
        <Typography variant='h4' component='h4'>
          Graphic Design
        </Typography>
      </div>
      <Projects id='projects' />
      <TextField style={{ color: 'white' }} variant='filled' label='Name' />
      <CheckboxExample />
      <ButtonGroup>
        <Button
          size='large'
          variant='contained'
          color='primary'
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        {/* <IconButton aria-label='delete' color='secondary'>
          <TapAndPlayIcon />
        </IconButton> */}
        <Button
          size='large'
          variant='contained'
          color='secondary'
          startIcon={<HighlightOffSharpIcon />}
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
