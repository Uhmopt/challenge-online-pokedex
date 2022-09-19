import React, { useMemo } from "react";
import { formatArray } from "utils/arrayUtils";
import Chip from "./Chip";

export default function Chips({
  data = [],
  getOptionLabel = (param) => (typeof param === "string" ? param : ""),
}) {
  const formattedData = useMemo(() => formatArray(data), [data]);

  return (
    <div className="flex">
      {formattedData.map((item, itemIndex) => (
        <Chip key={itemIndex} label={getOptionLabel(item)} />
      ))}
    </div>
  );
}
