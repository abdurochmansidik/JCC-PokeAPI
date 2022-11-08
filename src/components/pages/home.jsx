import React, { useEffect, useState } from "react";
import Card from "../partial/card";
  
function Home () {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=14"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
  
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <div>
    <div className="app-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" className="img-fluid" alt="Responsive image" style={{width: "300px", paddingBottom: "30px"}}/>
      
      <div className="container">
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-between w-100 mb-4">

              <div className="input-group w-25">
                  <button type="button" className="btn btn-primary border-light" style={{backgroundColor: "#FFC107"}}>Cari</button>
                  <input type="search" className="form-control" placeholder="Cari Pokemon" aria-label="Search" aria-describedby="search-addon" width="10px"/>
              </div>

              <div className="dropdown d-flex justify-content-end">
              <button className="btn btn-secondary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#FFC107"}}>
                  Tipe Pokemon
              </button>
              <ul className="dropdown-menu" style={{fontSize: "14px"}}>
                  <li><a className="dropdown-item" href="/">Water</a></li>
                  <li><a className="dropdown-item" href="/">Fire</a></li>
                  <li><a className="dropdown-item" href="/">Grass</a></li>
                  <li><a className="dropdown-item" href="/">Bug</a></li>
              </ul>
              </div>
              </div>
                                
            </div>
          </div>
      
      <div className="pokemon-container">
        <div className="all-container mt-3">
          {allPokemons.map((pokemon, index) => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              // stat1={pokemon.stats[0].stat.name}
              // stat2={pokemon.stats[1].stat.name}
              // stat3={pokemon.stats[2].stat.name}
              // stat4={pokemon.stats[3].stat.name}
              // stat5={pokemon.stats[4].stat.name}
              // stat6={pokemon.stats[5].stat.name}
              // bs1={pokemon.stats[0].base_stat}
              // bs2={pokemon.stats[1].base_stat}
              // bs3={pokemon.stats[2].base_stat}
              // bs4={pokemon.stats[3].base_stat}
              // bs5={pokemon.stats[4].base_stat}
              // bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>

        {/* <button className="load-more" 
          onClick={() => getAllPokemons()}>
          More Pokemons
        </button> */}
        
      </div>
    </div>
    </div>
  );
}
  
export default Home;