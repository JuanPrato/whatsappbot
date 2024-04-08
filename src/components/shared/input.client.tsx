"use client";

import { useEffect, useState } from "react";
import { Badge } from "./badge";
import { HiddenInput } from "./input";
import { twMerge } from "tailwind-merge";
import { useFormStatus } from "react-dom";

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

interface CommonProps {
  label?: string;
  dark?: boolean;
  placeholder?: string;
  inputClassName?: string;
  name?: string;
  boxClassName?: string;
  value?: string | number;
  error?: string;
  success?: string;
  errorClassName?: string;
}

type ButtonProps = CommonProps & {
  type?: "button" | "submit";
  onClick?: () => void;
};

const buttonClassName =
  "bg-primary text-center p-3 rounded-lg text-text cursor-pointer hover:bg-opacity-80 disabled:opacity-80 disabled:cursor-not-allowed";

export function ButtonInputWithPending(props: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <input
      type={props.type || "button"}
      name="button"
      className={twMerge(buttonClassName, props.inputClassName)}
      value={props.label}
      onClick={props.onClick}
      disabled={pending}
    />
  );
}
