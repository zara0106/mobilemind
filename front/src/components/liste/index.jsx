import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import "./liste.css";
import axios from "axios";


function Liste({activeLevel,setActiveLevel,activeFiliere,setActiveFiliere}) {
    const [levels, setLevels] = useState([])
    const [filieres, setFilieres] = useState([])

    const getLevels = () => {
        axios.get("http://localhost:3000/levels")
            .then(res => setLevels(res.data))
            .catch(err => console.log(err))
    }

    const getFilieres = () => {
        axios.get("http://localhost:3000/filieres")
            .then(res => setFilieres(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getLevels()
        getFilieres()
    }, [])

    return(
        <div>
            <p className="liste_etudiant">Liste etudiants</p>
            <div className="liste_date">
                <Icon icon="streamline:graduation-cap"/>
                <p>Annee scolaire:2023-2024</p>
            </div>

            <div className="liste_niveau">
                {levels?.map((level, index) => <p key={index} className={level.id === activeLevel ? "liste_niveauL1" : "liste_autreniveau1"  } onClick={() => setActiveLevel(level.id)}>Niveau {level?.nameLevel}</p>)}
            </div>

            <div className="liste_filiere">
                {filieres?.map((filiere, index) => <p key={index} className={filiere.abreviation === activeFiliere && "liste_paragraphe"} onClick={() => setActiveFiliere(filiere.abreviation)}>{filiere.extension}</p>)}
            </div>
        </div>
    )
}


export default Liste;