import { Match, Switch, createSignal, mergeProps } from "solid-js";
import { InputCheck } from "./InputCheck";
import styles from "../global/content.module.css";
import Tree from "./Tree";
import TreeLi from "./TreeLi";
import TreeType from "./TreeType";

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
      <div class={styles.content__seclector}>
        <span>css-style:</span>{" "}
        <code class={styles.code}>
          {optIn() ? finalProps.selector : "............."}
        </code>
      </div>
      <div class={styles.playground__container}>
        <div class={styles.playground}>
          <Switch>
            <Match when={props.type === "basic"}>
              <Tree
                div={optIn()}
                divItOne={optIn()}
                divItemTwo={optIn()}
                divItemFour={optIn()}
                divItemFive={optIn()}
                divItemThr={optIn()}
              />
            </Match>
            <Match when={props.type === "tagName"}>
              <Tree section={optIn()} sectionAp={optIn()} />
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
              <Tree foo={optIn()} />
            </Match>
            <Match when={props.type === "owl"}>
              <Tree liTwo={optIn()} liThree={optIn()} liFour={optIn()} />
            </Match>
            <Match when={props.type === "firstCh"}>
              <TreeLi liOne={optIn()} />
            </Match>
            <Match when={props.type === "lastCh"}>
              <TreeLi liSeven={optIn()} />
            </Match>
            <Match when={props.type === "nthCh"}>
              <TreeLi liThree={optIn()} />
            </Match>
            <Match when={props.type === "oddCh"}>
              <TreeLi
                liThree={optIn()}
                liOne={optIn()}
                liFive={optIn()}
                liSeven={optIn()}
              />
            </Match>
            <Match when={props.type === "evenCh"}>
              <TreeLi liTwo={optIn()} liFour={optIn()} liSix={optIn()} />
            </Match>
            <Match when={props.type === "nthLastCh"}>
              <TreeLi liFive={optIn()} />
            </Match>
            <Match when={props.type === "onlyCh"}>
              <TreeLi
                liFive={optIn()}
                liOne={optIn()}
                liTwo={optIn()}
                liThree={optIn()}
                liSix={optIn()}
              />
            </Match>
            <Match when={props.type === "firstType"}>
              <TreeType div={optIn()} />
            </Match>
            <Match when={props.type === "lastType"}>
              <TreeType divThree={optIn()} />
            </Match>
            <Match when={props.type === "nthType"}>
              <TreeType divTwo={optIn()} />
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
