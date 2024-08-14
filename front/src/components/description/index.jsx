import { Icon } from "@iconify/react";
import React from 'react';
import './description.css';

function Description(){
    return(
        <div>
            <div  className="listetudiants">
                <div className="listetudiants__detail">
                    <p className="listetudiants__paragraphe">160 etudiants en L1</p>

                    <div className="listetudiants__presente">
                        <div className="listetudiants_ronds1">

                        </div>
                        <p className="listetudiants__paragraphe1">80 etudiants present(e)</p>
                    </div>

                    <div className="listetudiants_absente">
                        <div className="listetudiants_ronds2"></div>
                        <p className="listetudiants__paragraphe1">80 etudiants absent(e)</p>
                    </div>
               </div>
                    
                <div className="listetudiants__filtre">
                    <p className="listetudiants__paragraphe1">Filtre par:</p>
                    <div className="listetudiants__icon">
                        <p >Tous</p>
                        <Icon icon="fa-solid:sort-down"/>
                    </div>


                    <input type="text" placeholder="Recherche dans les etudiants" className="listetudiants__recherche"/>
                </div>
            </div>
        </div>
    )
}

export default Description;