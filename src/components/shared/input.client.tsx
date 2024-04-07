"use client";

import { useEffect, useState } from "react";
import { Badge } from "./badge";
import { HiddenInput } from "./input";

interface Props {
  options: { text: string; value?: string }[];
  selectedOptions?: string[];
  name?: string;
}

export function SelectInput({ options, selectedOptions, name }: Props) {
  const [value, setValue] = useState<string[]>(selectedOptions || []);
  const [showOptions, setShowOptions] =
    useState<{ text: string; value?: string }[]>(updateOptions);

  function updateOptions() {
    return options.filter(
      (option) =>
        !value.some((selectedOption) => option.value === selectedOption),
    );
  }

  useEffect(() => {
    setShowOptions(updateOptions);
  }, [value]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 py-1">
        {value.map((v) => (
          <Badge
            key={v}
            text={options.find((o) => o.value === v)?.text || ""}
            className="cursor-pointer"
            onClick={() =>
              setValue((prevVal) => prevVal.filter((prev) => prev !== v))
            }
          />
        ))}
      </div>
      <select
        name="files"
        className=" w-full rounded-lg p-2"
        onChange={(e) => setValue((prev) => [...prev, e.target?.value])}
        multiple
      >
        {showOptions.map((option) => (
          <option key={option.value} value={option.value || option.text}>
            {option.text}
          </option>
        ))}
      </select>
      <HiddenInput name={name} value={value.join(",")} />
    </div>
  );
}
