import { TFiliere } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllFilieres = () => {
  const [allFilieres, setAllFilieres] = useState<TFiliere[]>([]);

  const getAllFilieres = () => {
    axios
      .get("http://localhost:3000/filieres")
      .then((res) => setAllFilieres(res.data as TFiliere[]))
      .catch((errr) => console.log(errr));
  };

  useEffect(() => {
    getAllFilieres();
  }, []);

  return { allFilieres };
};
