import { For, Match, Show, Switch, createSignal, mergeProps } from "solid-js";
import { InputCheck } from "./InputCheck";
import styles from "../global/content.module.css";
import { range } from "../utils/range";
import clsx from "clsx";

interface ContentBoxProps {
  title: string;
  description: string;
  selector: string;
  type: string;
}

export function ContentBox(props: ContentBoxProps) {
  const [optIn, setOptIn] = createSignal(false);
  const finalProps = mergeProps({ selector: "selector" }, props);
  return (
    <div class={styles.wraper}>
      <div>
        <h3 class={styles.content__title}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
      </div>
      <InputCheck
        label="add style"
        initialValue={optIn()}
        setOptIn={setOptIn}
      />
      <p class={styles.content__seclector}>
        <strong>css-style:</strong>{" "}
        {optIn() ? finalProps.selector : "............."}
      </p>
      <div class={styles.playground__container}>
        <p>.container</p>
        <div class={styles.playground}>
          <Switch>
            <Match when={props.type === "basic"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={styles.inner__box}
                    style={{
                      "border-radius": optIn() === true ? "50%" : "10px",
                    }}
                  >
                    <p>div</p>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "not"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={clsx(styles.inner__box, {
                      [styles.inner__box__blur]: item > 1 && optIn() === true,
                    })}
                  >
                    <p>div-{item}</p>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "is"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={clsx(styles.inner__box, {
                      [styles.inner__box__blur]: item % 2 && optIn() === true,
                    })}
                  >
                    <p>.class-{item}</p>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "has"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={clsx(styles.inner__box, {
                      [styles.inner__box_h]: item % 2 && optIn() === true,
                    })}
                  >
                    <Show when={item % 2}>
                      <p>p</p>
                    </Show>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "class"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={clsx(styles.inner__box, {
                      [styles.inner__box__blur]: item === 5 && optIn() === true,
                    })}
                  >
                    <p>.class-{item}</p>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "id"}>
              <For each={range(1, 10)}>
                {(item, index) => (
                  <div
                    class={clsx(styles.inner__box, {
                      [styles.inner__box__blur]: item === 5 && optIn() === true,
                    })}
                  >
                    <p>#id-{item}</p>
                  </div>
                )}
              </For>
            </Match>
            <Match when={props.type === "attribute"}>
              <For each={range(1, 5)}>
                {(item, index) => (
                  <div
                    custom-attribute={item}
                    class={clsx(styles.inner__box, {
                      [styles.inner__box_g]: item === 4 && optIn() === true,
                    })}
                  >
                    <p>[att-{item}]</p>
                  </div>
                )}
              </For>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
