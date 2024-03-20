interface CommonProps {
  label: string;
}

const labelClassName = "text-text-neg text-lg font-light";
const inputClassName = "bg-text-neg rounded-lg w-full min-h-10";

export function EmailInput(props: CommonProps) {
  return (
    <div className="w-full">
      <label htmlFor="mail" className={labelClassName}>
        {props.label}
      </label>
      <input type="email" name="mail" className={inputClassName} />
    </div>
  );
}

export function PasswordInput(props: CommonProps) {
  return (
    <div className="w-full">
      <label htmlFor="password" className={labelClassName}>
        {props.label}
      </label>
      <input type="password" name="password" className={inputClassName} />
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
