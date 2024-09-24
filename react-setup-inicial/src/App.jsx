function App() {
   
  return (
    <div className="w-screen h-screen bg-gradient-to-l from-sky-600 to-indigo-900 flex flex-col items-center justify-center gap-28">
      <Titulo/>
      <Boton/>
    </div>
  )
}

export default App

function Titulo() {
  return (
    <>
    <h1 className="duration-300 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg hover:scale-125 ">JORGE LORDUY</h1>
    </>
  )
  
}

function Boton() {
  return (
    <>
          <button className="shadow-md rounded-xl bg-indigo-700 text-white p-4 hover:shadow-lg">Ver Perfil</button>

    </>
  )
  
}