function Nav() {
    return (
      <div className="flex-wrap gap-5 mb-8 w-screen h-24 flex pt-7 px-28 justify-between">
        <p className="font-extrabold text-4xl text-indigo-950 ">
          Discover All consoles
        </p>{" "}
        <div className="flex gap-1 h-5 items-center">
          <input
            className="text-center  rounded-md bg-transparent border-double border-sky-500  border-4"
            type="text"
          />
          <span className="rounded-md shadow-md shadow-pink-800 p-1">
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
    );
  }
  
  function Card({ nombre, img, precio }) {
    return (
      <div className="group justify-between w-52 h-64 rounded-lg bg-gradient-to-tr from-indigo-800 to-cyan-600 shadow-lg shadow-cyan-800/50 duration-300 flex flex-col gap-2 items-center p-2">
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
  
  function Tarjetas({ info }) {
    return (
      <div className="flex flex-wrap gap-10 p-11 justify-center">
        {info.map((res) => (
          <Card nombre={res.nombre} img={res.img} precio={res.precio} ></Card>
        ))}
      </div>
    );
  }

  export {Tarjetas, Nav}