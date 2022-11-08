import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPokemon = () =>{

    const {id} = useParams();
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    // console.log(id);

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) =>{
            console.log(response.data)
            const isipost = response.data;
            setImg(isipost.sprites.other.dream_world.front_default)
            setName(isipost.name)
            setType(isipost.type)
        })
    }, [id])


  return(
    <div>
        {/* Detail Pokemon Start */}
        <div className="container">
          <div className="row mt-3 mb-4">
            <div className="col-12">  
                        <div className="d-flex justify-content-between align-items-center pb-2">
                            <span className="text-dark fw-semibold text-decoration-none h5">Detail Pokemon</span>
                            <a href="/" className="fw-semibold text-decoration-none h5" style={{color: "#FFC107"}}>Kembali</a>
                        </div>

                        <div className="card h-80 bg-light">
                            <img src={img} className="card-img-top mt-5" style={{width: "100%", height: "337px"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center fw-semibold pb-3" style={{color: "#101010", fontSize: "22px"}}>{name}</h5>
                                <p className="card-text" style={{fontSize: "17px"}}>{type}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-2 m-3">
                                <span className="text-dark fw-semibold text-decoration-none h5">{}</span>
                                <a href="#!" className="fw-semibold text-decoration-none h5" style={{color: "#D3AC48"}}>{}</a>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Detail Pokemon End */}
    </div>
  )
}

export default DetailPokemon;