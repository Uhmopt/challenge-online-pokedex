import React from "react";
import { zeroLeading } from "utils/mathUtil";
import Chips from "./Chips";
import Image from "./Image";

export default function PokemonCard({ data = {}, dataIndex = -1 }) {
  return (
    <div className="pokemon-card">
      <Image src={data?.image?.url} />
      <div className="pokemon-card-id">#{zeroLeading(data?.number, 3)}</div>
      <div className="pokemon-card-name">{data?.name ?? "???"}</div>
      <div className="flex-center">
        <Chips data={data?.types} />
      </div>
    </div>
  );
}
