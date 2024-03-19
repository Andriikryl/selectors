import { For } from "solid-js";
import styles from "../global/flag.module.css";
import { range } from "../utils/range";
function Flag() {
  let numOfColumns = 10;
  let staggeredDelay = 60;
  return (
    <div class={styles.flag}>
      <For each={range(1, numOfColumns)}>
        {(item, index) => {
          const delay = `${item * staggeredDelay}ms`; // Calculate the delay
          return (
            <div
              class={styles.column}
              style={{ "animation-delay": delay }} // Use the calculated delay
            />
          );
        }}
      </For>
    </div>
  );
}

export default Flag;
