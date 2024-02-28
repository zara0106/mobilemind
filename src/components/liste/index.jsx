import { Icon } from "@iconify/react";
import React from "react";
import "./liste.css";


function Liste() {
    return(
        <div>
            <p className="liste_etudiant">Liste etudiants</p>
            <div className="liste_date">
                <Icon icon="streamline:graduation-cap"/>
                <p>Annee scolaire:2023-2024</p>
            </div>

            <div className="liste_niveau">
                <p className="liste_niveauL1">Niveau L1</p>
                <div className="liste_autreniveau">
                    <p className="liste_autreniveau1">Niveau L2</p>
                    <p className="liste_autreniveau1">Niveau L3</p>
                    <p className="liste_autreniveau1">Niveau M1</p>
                    <p className="liste_autreniveau1">Niveau M2</p>
                </div>
            </div>

            <div className="liste_filiere">
                <p className="liste_paragraphe">Informatique Statistique Appliquee et Intelligence Artificielle</p>
                <p>Informatique Gestion, Genie Logiciel</p>
            </div>
        </div>
    )
}


export default Liste;