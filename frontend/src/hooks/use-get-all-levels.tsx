import { TLevel } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllLevels = () => {
  const [allLevels, setAllLevels] = useState<TLevel[]>([]);

  const getAllLevels = () => {
    axios
      .get("http://localhost:3000/levels")
      .then((res) => setAllLevels(res.data as TLevel[]))
      .catch((errr) => console.log(errr));
  };

  useEffect(() => {
    getAllLevels();
  }, []);

  return { allLevels };
};
