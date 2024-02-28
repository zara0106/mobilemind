import {Link} from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Liste from "../../components/liste";
import Students from "../../components/students";
import Descriptions from "../../components/descriptions";


function Listes () {
    return(
        <div className="page">
            <div className="page__left">
                <Sidebar />
            </div>
            <div className="page__right">
                <Header />
                <div>
                    <Liste/>
                </div>
                <div>
                    <Descriptions/>
                </div>
                <div>
                    <Students/>
                </div>
            </div>
        </div>
    )
}

export default Listes;