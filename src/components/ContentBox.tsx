import { For, Match, Show, Switch, createSignal, mergeProps } from "solid-js";
import { InputCheck } from "./InputCheck";
import styles from "../global/content.module.css";
import { range } from "../utils/range";
import clsx from "clsx";
import Tree from "./Tree";

interface ContentBoxProps {
  title: string;
  description: string;
  selector: string;
  type: string;
  extraEx: boolean;
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
              <Tree div={optIn()} />
            </Match>
            <Match when={props.type === "not"}>
              <Tree
                div={optIn()}
                divItemTwo={optIn()}
                divItemFour={optIn()}
                divItemFive={optIn()}
              />
            </Match>
            <Match when={props.type === "is"}>
              <Tree liThree={optIn()} liFour={optIn()} />
            </Match>
            <Match when={props.type === "where"}>
              <Tree liOne={optIn()} liTwo={optIn()} />
            </Match>
            <Match when={props.type === "has"}>
              <Tree sectionAp={optIn()} />
            </Match>
            <Match when={props.type === "class"}>
              <Tree class={optIn()} />
            </Match>
            <Match when={props.type === "id"}>
              <Tree id={optIn()} />
            </Match>
            <Match when={props.type === "attribute"}>
              <Tree foo={optIn()} />
            </Match>
            <Match when={props.type === "lists"}>
              <Tree picture={optIn()} img={optIn()} p={optIn()} a={optIn()} />
            </Match>
            <Match when={props.type === "descendant"}>
              <Tree
                liOne={optIn()}
                liTwo={optIn()}
                liThree={optIn()}
                liFour={optIn()}
              />
            </Match>
            <Match when={props.type === "next"}>
              <Tree liTwo={optIn()} />
            </Match>
            <Match when={props.type === "child"}>
              <Tree aside={optIn()} />
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
