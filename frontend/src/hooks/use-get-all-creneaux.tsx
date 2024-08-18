import { TCreneau } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllCreneaux = () => {
  const [allCreneaux, setAllCreneaux] = useState<TCreneau[]>([]);

  const getAllCreneaux = () => {
    axios
      .get("http://localhost:3000/creneau")
      .then((res) => setAllCreneaux(res.data as TCreneau[]))
      .catch((errr) => console.log(errr));
  };

  const refetch = () => {
    getAllCreneaux();
  };

  useEffect(() => {
    getAllCreneaux();
  }, []);

  return { allCreneaux, refetch };
};
