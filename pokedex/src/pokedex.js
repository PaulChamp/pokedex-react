import React from "react";
import Pokecard from "./Pokecard.js";
import "./pokedex.css";

const Pokedex = (props) => {
    return (
        <div className ="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map((p) => {
                    return <Pokecard {...p} />;
                })}
            </div>
        </div>
    );
};

export default Pokedex;