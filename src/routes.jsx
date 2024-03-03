import "./styles.css";
import { createBrowserRouter } from "react-router-dom";
import Matieres from "./pages/matieres";
import Etudiant from "./pages/etudiant";
import Dashboard from "./pages/dashboard";
import Delegueconfirm from "./pages/delegueconfirm";
import Profil from "./pages/profil";
import Listes from "./pages/listes";
import Searche from "./pages/searche";
import Searcheactive from "./pages/searchactive";
import Delegue from "./pages/delegue";
import Cheker from "./pages/cheker";
import Terminer from "./pages/terminer";
import Oui from "./pages/oui";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/etudiant",
    element: <Etudiant />,
  },
  {
    path: "/matieres",
    element: <Matieres />,
  },
  {
    path: "/delegueconfirm",
    element: <Delegueconfirm/>
  },
  {
    path: "/profil",
    element: <Profil/>
  },
  {
    path: "/listes",
    element: <Listes/>
  },
  {
    path: "/searche",
    element: <Searche/>
  },
  {
    path: "/searcheactive",
    element: <Searcheactive/>
  },
  {
    path: "/delegue",
    element: <Delegue/>
  },
  {
    path: "/cheker",
    element: <Cheker/>
  },
  {
    path: "/terminer",
    element: <Terminer/>
  },
  {
    path: "/oui",
    element: <Oui/>
  }

]);
