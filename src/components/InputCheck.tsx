import { createSignal, mergeProps } from "solid-js";

interface InputCheckProps {
  label: string;
  initialValue: boolean;
  setOptIn: (value: boolean) => void;
}

export function InputCheck(props: InputCheckProps) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="checkbox"
          id="opt-in-checkbox"
          checked={props.initialValue}
          onChange={(event) => {
            props.setOptIn(event.target.checked);
          }}
        />
        <label>{props.label}</label>
      </form>
    </div>
  );
}
