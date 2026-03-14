import { useState, createContext, useContext } from 'react'
import './app.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CounterContext = createContext();

function BasicButtons() {
  const {getCount, setCount} = useContext(CounterContext);
  const btnStyle = {
    backgroundColor: "#4f3872",
    color: "#b4b5df",
    cursor: "pointer",
    borderRadius: "20px"
  }
  const incrementCount = () => {
    setCount(getCount => getCount + 1);
  }
  const resetCount = () => {
    setCount(0);
  }
  const decrementCount = () => {
    setCount(getCount => getCount - 1);
  }
  return (
    <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent='center'>
      <Button variant="contained" sx={btnStyle} onClick={incrementCount}>Increment</Button>
      <Button variant="contained" sx={btnStyle} onClick={resetCount}>Reset</Button>
      <Button variant="contained" sx={btnStyle} onClick={decrementCount}>Decrement</Button>
    </Stack>
  );
}

function BoxBasic() {
  const {getCount} = useContext(CounterContext);
  return (
    <Box component="section" sx={{ 
      p: 3, 
      border: '2px solid #4f3872',
      borderRadius: "20px",
      width: "100%",
      maxWidth: 600,
      mx: "auto"  
    }}>
      <h1 className='h1Style'>Counter Playground</h1>
      <p className='pStyle'>Count Value is: <span className='numStyle'>{getCount}</span></p>
      <BasicButtons />
    </Box>
  );
}

function App() {

  const [getCount, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{getCount, setCount}}>
        <BoxBasic />
      </CounterContext.Provider>
    </>
  )
}

export default App
