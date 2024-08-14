import {Link} from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Liste from "../../components/liste";
import Students from "../../components/students";
import Descriptions from "../../components/descriptions";
import { useState } from "react";


function Listes () {
    const [activeLevel, setActiveLevel] = useState(1)
    const [activeFiliere, setActiveFiliere] = useState('ISAIA')
    const [search, setSearch] = useState('')

    return(
        <div className="page">
            <div className="page__left">
                <Sidebar />
            </div>
            <div className="page__right">
                <Header />
                <div>
                    <Liste activeLevel={activeLevel} setActiveLevel={setActiveLevel} activeFiliere={activeFiliere} setActiveFiliere={setActiveFiliere}/>
                </div>
                <div>
                    <Descriptions search={search} setSearch={setSearch}/>
                </div>
                <div>
                    <Students activeLevel={activeLevel} activeFiliere={activeFiliere} search={search}/>
                </div>
            </div>
        </div>
    )
}

export default Listes;