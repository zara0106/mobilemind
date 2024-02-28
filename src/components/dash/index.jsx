import { Icon } from "@iconify/react";
import React from 'react';
import './dash.css';
import Card from "./card";
import Niveau from "./niveau";
import Parcours from "./parcours";
import Bar from "./bar";
import Student from "./student";

const days = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"]
const numbersDay = ["26", "27", "28", "29", "01", "02", "03"]
const numbers = [0, 40, 80, 160, 200, 240]

function Dash() {
    return (
        <div className="flex-1 flex gap-x-5 h-full ">

            <div className="flex-1 h-full mt-5">
                <p>APERCU</p>

                <div className="grid grid-cols-4 gap-x-1">
                    <Card title1='ANNEE SCOLAIRE' title2='2023/2024' />
                    <Card title1="DATE D'AUJOURD'HUI" title2='01/03/2024' />
                    <Card title1="NOMBRE D'ETUDIANTS" title2='2000' />
                    <Card title1="NOMBRE DE MATIERES" title2='12' />
                </div>


                <div className="h-[400px] flex gap-x-5 pt-5">
                    <div className="w-[400px] flex flex-col p-3 rounded-md bg-white h-full">
                        <div className="">
                            <p>2000</p>
                            <p>ETUDIANTS</p>
                        </div>

                        <div className="flex-1 flex gap-x-2 ">
                            <div className="w-[20px] h-full flex flex-col-reverse justify-between pt-3 pb-5 text-xs">
                                {numbers.map((number) => <p>{number}</p>)}
                            </div>

                            <div className="flex-1 flex gap-x-3 h-full ">
                                <Bar height={80} title="L1" />
                                <Bar height={70} title="L2" />
                                <Bar height={90} title="L3" />
                                <Bar height={50} title="M1" />
                                <Bar height={20} title="M2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="w-full">
                            <div className="flex gap-x-5">
                                <div>
                                    <h4>PARCOURS</h4>
                                    <div className="flex-1 flex flex-col gap-y-3 w-full">
                                        <Parcours title="Génie logiciel et base de données" number={1500} badge="ETUDIANTS" />
                                        <Parcours title="Système et réseau" number={500} badge="ETUDIANTS" />
                                    </div></div>

                                <div className="hidden min-[1600px]:block w-1/2">
                                    <h4>PROFESSEURS</h4>
                                    <div className="flex flex-col gap-y-2">
                                        <Student firstName="RAKOTONIRINA" lastName="Mialy" />
                                        <Student firstName="NOMENJANAHARIZARA" lastName="zara" />
                                        <Student firstName="RAKOTONIRINA" lastName="Mialy" />
                                        <Student firstName="RAKOTONIRINA" lastName="Mialy" />
                                        <Student firstName="RAKOTONIRINA" lastName="Mialy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="w-[350px] mt-5">
                <h4>PRESENCES</h4>


                <div className="bg-white p-5 rounded-md mt-3">
                    <div className="flex justify-end">
                        <Icon icon='mdi:calendar-outline' className="text-2xl " />
                    </div>

                    <div>
                        <div className="mt-5 grid grid-cols-7">
                            {days.map(day => <span className="text-black font-semibold text-center">{day}</span>)}
                        </div>

                        <div className="mt-1 grid grid-cols-7">
                            {numbersDay.map(day => <p className={`text-center ${day === "28" ? 'mx-auto flex items-center justify-center bg-primary text-white h-6 w-6 rounded-full' : ""}`}>{day}</p>)}
                        </div>

                        <div className="mt-3 flex flex-col gap-5">
                            <Niveau title="NIVEAU L1" bar={80} />
                            <Niveau title="NIVEAU L2" bar={70} />
                            <Niveau title="NIVEAU L3" bar={95} />
                            <Niveau title="NIVEAU M1" bar={65} />
                            <Niveau title="NIVEAU M2" bar={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash;