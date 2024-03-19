import clsx from "clsx";
import styles from "../global/tree.module.css";

interface TreeProps {
  liFive?: boolean;
  liSix?: boolean;
  liSeven?: boolean;
  liEigth?: boolean;
  liOne?: boolean;
  liTwo?: boolean;
  liThree?: boolean;
  liFour?: boolean;
  ul?: boolean;
  nav?: boolean;
}

export default function TreeLi(pops: TreeProps) {
  return (
    <ul class={styles.tree}>
      <li>
        {" "}
        <span>Root</span>
        <ul>
          <li>
            {" "}
            <span class={clsx(pops.nav === true && styles.active)}>nav</span>
            <ul>
              <li>
                {" "}
                <span class={clsx(pops.ul === true && styles.active)}>ul</span>
                <ul>
                  <li>
                    {" "}
                    <span class={clsx(pops.liOne === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liTwo === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liThree === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liFour === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liFive === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liSix === true && styles.active)}>
                      li
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.liSeven === true && styles.active)}>
                      li
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
