import { twMerge } from "tailwind-merge";

interface CommonProps {
  label: string;
  dark?: boolean;
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
    <div className="w-full">
      <label htmlFor="text" className={labelClassName(props.dark)}>
        {props.label}
      </label>
      <input type="text" name="text" className={inputClassName(props.dark)} />
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
};

const buttonClassName =
  "bg-primary text-center w-full p-3 rounded-lg text-text";

export function ButtonInput(props: ButtonProps) {
  return (
    <div className="w-full">
      <input
        type={props.type || "button"}
        name="password"
        className={buttonClassName}
        value={props.label}
      />
    </div>
  );
}
