import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Titulo from './components/Titulo'
import Button from './components/Button';
import Statistics from './components/Statics'



const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const handleNeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClick = () => {
    setClicks({...clicks, bad: clicks.neutral + 1})
  }

    return (
      <>
      <div>
      <Titulo name='Give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Titulo name='Statics' />
      <Statistics  clicks={clicks} />

      </div>
      </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

