import { createSignal, mergeProps } from "solid-js";
import styles from "../global/input.module.css";

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
        class={styles.form}
      >
        <input
          class={styles.input}
          type="checkbox"
          id="opt-in-checkbox"
          checked={props.initialValue}
          onChange={(event) => {
            props.setOptIn(event.target.checked);
          }}
        />
        <label class={styles.label}>{props.label}</label>
      </form>
    </div>
  );
}
