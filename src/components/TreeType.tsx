import clsx from "clsx";
import styles from "../global/tree.module.css";

interface TreeProps {
  section?: boolean;
  li?: boolean;
  div?: boolean;
  divTwo?: boolean;
  aside?: boolean;
  picture?: boolean;
  img?: boolean;
  divThree?: boolean;
  span?: boolean;
  p?: boolean;
  ul?: boolean;
  main?: boolean;
}

export default function TreeType(pops: TreeProps) {
  return (
    <ul class={styles.tree}>
      <li>
        {" "}
        <span>Root</span>
        <ul>
          <li>
            {" "}
            <span class={clsx(pops.main === true && styles.active)}>main</span>
            <ul>
              <li>
                {" "}
                <span class={clsx(pops.section === true && styles.active)}>
                  section
                </span>
                <ul>
                  <li>
                    {" "}
                    <span class={clsx(pops.ul === true && styles.active)}>
                      ul
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.li === true && styles.active)}>
                          li
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.div === true && styles.active)}>
                      div
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.p === true && styles.active)}>
                          p
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.divTwo === true && styles.active)}>
                      div
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.p === true && styles.active)}>
                          p
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.aside === true && styles.active)}>
                      aside
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.p === true && styles.active)}>
                          p
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.picture === true && styles.active)}>
                      picture
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.img === true && styles.active)}>
                          img
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.divThree === true && styles.active)}>
                      div
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.p === true && styles.active)}>
                          p
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <span class={clsx(pops.p === true && styles.active)}>
                      p
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.span === true && styles.active)}>
                          span
                        </span>
                      </li>
                      <li>
                        <span class={clsx(pops.span === true && styles.active)}>
                          span
                        </span>
                      </li>
                    </ul>
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
