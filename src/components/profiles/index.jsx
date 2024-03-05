import { Icon } from "@iconify/react";
import React from "react";
import "./profiles.css"

function Profiles(){
    return(
        <div>
            <div className="profile_icon">
                <Icon icon="basil:arrow-left-solid" className="icon"/>
                <p className="paragraphe">Profil etudiants</p>
             </div>

             <div className="profile_etudiants">
                <div className="profile">
                    <div className="profile_nom">
                        <p className="profile_border"></p>
                        <p>Zara Nomenjanahary</p>
                        <p>Etudiant</p>
                    </div>
                    <div className="profile_matricule">
                        <p>Numero matricule</p>
                        <p className="profile_paragraphe">34000 </p>
                    </div>

                    <div className="profile_matricule">
                        <p>Niveau</p>
                        <p>L1</p>
                    </div>

                    <div className="profile_matricule">
                        <p>Parcours</p>
                        <p>Informatique et Telecommunication</p>
                    </div>

                    <div className="profile_matricule">
                        <p>Email</p>
                        <p>nomenjanaharizara27@gmail.com</p>
                    </div>

                    <div className="profile_matricule">
                        <p>Telephone</p>
                        <p>0340644427</p>
                    </div>

                </div>
                <div className="profile_matiere">
                    <div className="profile_niveau">
                        <p>Niveau</p>
                        <div className="profile_icone">
                            <p>L1</p>
                            <Icon icon="fa-solid:sort-down"/>
                        </div>
                        <input placeholder="Chercher dans les matieres"/>
                       
                    </div>
                    <div className="profile_tableau">
                        <tr>
                            <th className="matieres">Matiere</th>
                            <th className="matieress">Presence</th>
                            <th className="absences">Absences</th>
                        </tr>

                        <tr>
                            <td className="matieres">Statistique</td>
                            <td className="matieress text-center">80 sur 90</td>
                            <td className="absences1">10</td>
                        </tr>
                </div>
                </div>

               
             </div>
        </div>
       
    )
}

export default Profiles;
