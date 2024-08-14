import { Icon } from "@iconify/react";
import React from 'react';
import './descriptions.css';

function Descriptions({search, setSearch}){
    return(
        <div>
            <div  className="listetudiants">
                <div className="listetudiants__detail">
                    <p className="listetudiants__paragraphe">160 etudiants en L1</p>
               </div>
                    
                <div className="listetudiants__filtre">
                    <p className="listetudiants__paragraphe1">Filtre par:</p>
                    <div className="listetudiants__icon">
                        <p >Tous</p>
                        <Icon icon="fa-solid:sort-down"/>
                    </div>


                    <input type="text" placeholder="Recherche dans les etudiants" className="listetudiants__recherche"  value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Descriptions;