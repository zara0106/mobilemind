import { Input } from "@/components/ui/input";
import { useGetAllLevels } from "@/hooks/use-get-all-levels";
import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

export const Students = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { allLevels } = useGetAllLevels();
  const currentLevel = allLevels.find((level) => level.id === Number(id));

  return (
    <div>
      <Input type="text" placeholder="Recherche" />

      <div className="mt-5">
        <h1 className="text-2xl">Niveau {currentLevel?.nameLevel}</h1>
      </div>
    </div>
  );
};
