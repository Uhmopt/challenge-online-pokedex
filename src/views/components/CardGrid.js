import { useMemo } from "react";
import { formatArray } from "utils/arrayUtils";

export default function CardGrid({
  data = [],
  component: Component = () => null,
  componentParams = {},
}) {
  const formattedData = useMemo(() => formatArray(data), [data]);

  return (
    <div className="grid">
      {formattedData.map((item, itemIndex) => (
        <Component
          key={itemIndex}
          data={item}
          dataIndex={itemIndex}
          {...componentParams}
        />
      ))}
    </div>
  );
}
