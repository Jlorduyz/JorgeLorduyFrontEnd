import {info} from './info.js'

import { Nav, Tarjetas } from './Principal.jsx';
 
function App() {
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-cyan-600 to-teal-600 flex flex-col">
      <Nav info={info}/>
      
    </div>
  );
}

export default App;


