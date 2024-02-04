import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Button from './components/Button';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Do <strong>not</strong> suck</Alert>}
      <Button color='info' onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );

}

export default App
