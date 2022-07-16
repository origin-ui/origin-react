import React, { useEffect } from 'react';
import { OButton } from '@origin/components'
import { add } from '@origin/utils'

function App() {
  useEffect(() => {
    console.log('====================================');
    console.log(add(1,5));
    console.log('====================================');
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
