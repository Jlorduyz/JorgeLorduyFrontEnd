import {info} from './info.js'
import { Nav, Tarjetas } from './Principal.jsx';
 
function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-pink-600 to-violet-700 flex flex-col">
      <Nav />
      <Tarjetas info={info}></Tarjetas>
    </div>
  );
}

export default App;


