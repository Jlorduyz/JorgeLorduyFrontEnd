import { useState } from "react";

function Nav({ info }) {
  const [textoBuscar, setSearchText] = useState("");

  function opcionesAbuscar(newValue) {
    setSearchText(newValue);
  }

  return (
    <>
      <div className="flex-wrap gap-5 mb-8 w-screen h-24 flex pt-7 px-28 justify-between">
        <p className="font-extrabold text-4xl text-indigo-950 ">
          Discover All consoles
        </p>{" "}
        <div className="flex gap-1 h-6 items-center">
          <input
            className="rounded-md bg-transparent border-double border-sky-500  border-4"
            type="text"
            value={textoBuscar}
            onChange={(res) => opcionesAbuscar(res.target.value)}
          />
          <div className="relative w-8 h-8">
            <div className="absolute bottom-0 right-0 w-7 h-7 bg-black"></div>
            <span className="absolute flex items-center justify-center shadow-pink-800 p-1 top-0 left-0 bg-rose-700 w-7 h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Tarjetas info={info} textoBuscar={textoBuscar}></Tarjetas>
    </>
  );
}

function Card({ nombre, img, precio }) {
  return (
    <div className="group justify-between w-80 h-96 rounded-lg bg-gradient-to-tr from-rose-900 to-red-500 shadow-lg shadow-cyan-800/50 duration-300 flex flex-col gap-2 items-center p-2">
      <img className="w-4/6" src={img} alt="" />
      <div className="p-3 gap-2 flex flex-col">
        <div className="flex justify-center gap-1">
          <p className="font-extrabold text-sky-200">{nombre}</p>
          <p className="font-medium text-sky-100">{precio}</p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 rounded-lg bg-gradient-to-t from-indigo-900 to-sky-700 hover:shadow-md hover:shadow-black duration-500 font-bold py-1">
          Comprar
        </button>
      </div>
    </div>
  );
}

function Tarjetas({ info, textoBuscar }) {
  let tarjetasFiltradas = [];
  {
    info.forEach((res) => {
      if (res.nombre.toLowerCase().includes(textoBuscar.toLowerCase())) { 
        tarjetasFiltradas.push(
          <Card
            nombre={res.nombre}
            img={res.img}
            precio={res.precio}
            key={res.id}
          ></Card>
        );
      }
    });
  }
  return (
    <div id="contenido" className="flex flex-wrap gap-10 p-11 justify-center">
      {tarjetasFiltradas.length > 0 ? (
        tarjetasFiltradas
      ) : (
        <div className="w-full h-1/4 p-3 flex flex-col items-center gap-5">
          <p className="font-extrabold text-3xl text-rose-800">
            We don't have what you are looking for{" "}
          </p>
          <p className="font-bold text-2xl text-rose-800">
            {" "}
            (Or yes but you don't know how to write it{" "}
            <span className="text-4xl">🤷‍♂️</span>){" "}
          </p>
        </div>
      )}
    </div>
  );
}


export { Tarjetas, Nav };
