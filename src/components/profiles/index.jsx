import { Icon } from "@iconify/react";
import React from "react";
import "./profiles.css"

function Profiles() {
    return (
        <div>
            <div className="profile_icon">
                <Icon icon="basil:arrow-left-solid" className="icon" />
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
                    <div className="profile_niveau items-center">
                        <p>Niveau</p>
                        <div className="profile_icone">
                            <p>L1</p>
                            <Icon icon="fa-solid:sort-down" />
                        </div>
                        <input placeholder="Chercher dans les matieres" className="border p-3 rounded-md" />

                    </div>
                    <div className="profile_tableau px-5">
                        <tr className="px-10">
                            <th className="matieres">Matiere</th>
                            <th className="matieress">Presence</th>
                            <th className="absences">Absences</th>
                        </tr>

                        <tbody className="">
                            <tr className="bg-slate-200">
                                <td className="matieres px-3 pb-1">Statistique</td>
                                <td className="matieress text-center"><span className="text-green-500">80</span> sur 90</td>
                                <td className="absences1">10</td>
                            </tr>
                            {/* <tr className="bg-slate-200 mt-1">
                                <td className="matieres px-3 pb-1">Statistique</td>
                                <td className="matieress text-center"><span className="text-green-500">80</span> sur 90</td>
                                <td className="absences1">10</td>
                            </tr> */}
                        </tbody>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Profiles;
