import { TClasse } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllClasses = () => {
  const [allClasses, setAllClasses] = useState<TClasse[]>([]);

  const getAllClasses = () => {
    axios
      .get("http://localhost:3000/classes")
      .then((res) => setAllClasses(res.data as TClasse[]))
      .catch((errr) => console.log(errr));
  };

  useEffect(() => {
    getAllClasses();
  }, []);

  return { allClasses };
};
