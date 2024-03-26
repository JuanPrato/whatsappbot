import { twMerge } from "tailwind-merge";

interface CommonProps {
  label?: string;
  dark?: boolean;
  placeholder?: string;
  inputClassName?: string;
  name?: string;
  boxClassName?: string;
}

const labelClassName = (dark?: boolean) =>
  twMerge(dark ? "text-text-neg" : "text-text", "text-lg font-light");
const inputClassName = (dark?: boolean) =>
  twMerge(
    dark
      ? "bg-text-neg"
      : "bg-transparent border border-text border-opacity-30",
    "rounded-lg w-full min-h-10 p-2",
  );

export function EmailInput(props: CommonProps) {
  return (
    <div className="w-full">
      <label htmlFor="mail" className={labelClassName(props.dark)}>
        {props.label}
      </label>
      <input type="email" name="mail" className={inputClassName(props.dark)} />
    </div>
  );
}

export function TextInput(props: CommonProps) {
  return (
    <div className={twMerge("w-full", props.boxClassName)}>
      {props.label && (
        <label
          htmlFor={props.name || "text"}
          className={labelClassName(props.dark)}
        >
          {props.label}
        </label>
      )}
      <input
        type="text"
        name={props.name || "text"}
        placeholder={props.placeholder}
        className={twMerge(inputClassName(props.dark), props.inputClassName)}
      />
    </div>
  );
}

export function TextAreaInput(props: CommonProps) {
  return (
    <div className={twMerge("w-full", props.boxClassName)}>
      {props.label && (
        <label
          htmlFor={props.name || "text"}
          className={labelClassName(props.dark)}
        >
          {props.label}
        </label>
      )}
      <textarea
        name={props.name || "text"}
        placeholder={props.placeholder}
        className={twMerge(inputClassName(props.dark), props.inputClassName)}
      />
    </div>
  );
}

export function PhoneInput(props: CommonProps) {
  return (
    <div className="w-full">
      <label htmlFor="phone" className={labelClassName(props.dark)}>
        {props.label}
      </label>
      <input type="tel" name="phone" className={inputClassName(props.dark)} />
    </div>
  );
}

export function PasswordInput(props: CommonProps) {
  return (
    <div className="w-full">
      <label htmlFor="password" className={labelClassName(props.dark)}>
        {props.label}
      </label>
      <input
        type="password"
        name="password"
        className={inputClassName(props.dark)}
      />
    </div>
  );
}

type ButtonProps = CommonProps & {
  type?: "button" | "submit";
  onClick?: () => void;
};

const buttonClassName =
  "bg-primary text-center p-3 rounded-lg text-text cursor-pointer hover:bg-opacity-80";

export function ButtonInput(props: ButtonProps) {
  return (
    <input
      type={props.type || "button"}
      name="button"
      className={twMerge(buttonClassName, props.inputClassName)}
      value={props.label}
      onClick={props.onClick}
    />
  );
}
