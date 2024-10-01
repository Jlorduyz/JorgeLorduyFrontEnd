import { useState, useEffect } from "react";

function Layout() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <div className="w-screen h-24 bg-red-700 flex p-2 justify-center text-white items-center shadow-xl">
      <p className="font-valo font-bold text-4xl">Agentes de Valorant</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-32 w-screen bg-red-700 flex items-center justify-center">
      <p className="font-valo text-xl text-white">
        Creado por Jorge Lorduy 2024
      </p>
    </div>
  );
}

function Main() {
  const [agentes, setAgentes] = useState(null);
  const [carga, setCarga] = useState(true);
  const [ filtrado, setFiltrado ] = useState({texto:"",select:""})
 
  
  function busquedaDeTexto(valor) {
    setFiltrado(res => ({
        ...res,
        texto : valor
    }))
  }
  function selects(valor) {
    setFiltrado(res => ({
        ...res,
        select : valor
    }))
  }

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAgentes(res.data);
        setCarga(false);
      });
  }, []);


  return (
    <div className="grow flex flex-col">
      <Filtros agentes={agentes} busquedaDeTexto={busquedaDeTexto} selects={selects}></Filtros>
      <Tarjetas agentes={agentes} carga={carga} filtrado={filtrado}></Tarjetas>
    </div>
  );
}

function Filtros({ agentes , busquedaDeTexto, selects }) {
    let roles = []
  function roless (agentes){
    if(agentes){
    let rols = agentes.map(res => res.role.displayName)
    return [...new Set(rols)]}}
const rolesUnicos = roless(agentes)
return (
    <div className="w-screen flex flex-wrap p-5 justify-around gap-5">
      <select className="rounded-md py-1 px-2 font-bold text-2xl text-white bg-transparent" name="roles" id=""  onChange={(e) => selects(e.target.value)}>
        <option className="text-black" value="">Todos</option>
        {rolesUnicos ? rolesUnicos.map(res => (<option className="text-black" key={res} value={res}>{res}</option>)) : ""}
      </select>
      <label className="flex flex-col gap-1.5 font-semibold text-white">Buscar Agente..<input className="pl-2 rounded-lg py-1 text-black" onChange={(e) => busquedaDeTexto(e.target.value)} type="text"  placeholder="buscar.."/></label>
    </div>
  );
}
function Tarjetas({ agentes, carga , filtrado}) {
  if (carga) return <div className="w-screen flex justify-center pt-8 animate-pulse"><p className="font-extrabold text-6xl text-white ">Cargando......</p></div>;
  let agentesFiltrados = []
  filtrado.select != "" ? agentesFiltrados = agentes.filter(res => res.role.displayName == filtrado.select) : agentesFiltrados = agentes
 let agentesFiltradosB = agentesFiltrados.filter(res=> res.displayName.toLowerCase().includes(filtrado.texto.toLowerCase()))
  return (
    <div className="w-screen p-5 flex flex-wrap gap-6 justify-center">
      {agentesFiltradosB.map((res) => (
        <div
          key={res.uuid}
          className="w-64 h-80  group rounded-lg bg-gradient-to-tl from-red-600 to-red-900 flex flex-col items-center gap-2"
        >
          <img src={res.fullPortrait} alt="" />
          <p className="font-valo text-2xl text-white">{res.displayName}</p>
          <button className="font-semibold transition duration-300 rounded-sm bg-gradient-to-tr from-sky-600 to-indigo-600 group-hover:from-rose-400 group-hover:to-pink-600 hover:shadow-lg  px-2 py-0.5 text-white">
            Agregar al Team
          </button>
        </div>
      ))}
    </div>
  );
}
export { Layout };
