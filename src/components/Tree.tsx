import clsx from "clsx";
import styles from "../global/tree.module.css";

interface TreeProps {
  sectionAp?: boolean;
  liOne?: boolean;
  liTwo?: boolean;
  liThree?: boolean;
  liFour?: boolean;
  divItOne?: boolean;
  ol?: boolean;
  divItemTwo?: boolean;
  divItemThr?: boolean;
  divItemFour?: boolean;
  divItemFive?: boolean;
  section?: boolean;
  div?: boolean;
  p?: boolean;
  class?: boolean;
  a?: boolean;
  li?: boolean;
  ul?: boolean;
  nav?: boolean;
  img?: boolean;
  id?: boolean;
  foo?: boolean;
  aside?: boolean;
  picture?: boolean;
}

export default function Tree(pops: TreeProps) {
  return (
    <ul class={styles.tree}>
      <li>
        {" "}
        <span>Root</span>
        <ul>
          <li>
            {" "}
            <span class={clsx(pops.section === true && styles.active)}>
              section
            </span>
            <ul>
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
                <span class={clsx(pops.class === true && styles.active)}>
                  .class
                </span>
                <ul>
                  <li>
                    <span class={clsx(pops.id === true && styles.active)}>
                      #id
                    </span>
                  </li>
                  <li>
                    <span class={clsx(pops.foo === true && styles.active)}>
                      [att="4"] <br />
                      span
                    </span>
                  </li>
                  <li>
                    <span class={clsx(pops.a === true && styles.active)}>
                      a
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <span class={clsx(pops.sectionAp === true && styles.active)}>
              section
            </span>
            <ul>
              <li>
                {" "}
                <span class={clsx(pops.aside === true && styles.active)}>
                  aside
                </span>
                <ul>
                  <li>
                    <span class={clsx(pops.div === true && styles.active)}>
                      div
                    </span>
                    <ul>
                      <li>
                        <span
                          class={clsx(pops.divItOne === true && styles.active)}
                        >
                          item-1 <br />
                          div
                        </span>
                        <ul>
                          <li>
                            <span
                              class={clsx(pops.ol === true && styles.active)}
                            >
                              ol
                            </span>
                            <ul>
                              <li>
                                <span
                                  class={clsx(
                                    pops.liOne === true && styles.active
                                  )}
                                >
                                  li
                                </span>
                              </li>
                              <li>
                                <span
                                  class={clsx(
                                    pops.liTwo === true && styles.active
                                  )}
                                >
                                  li
                                </span>
                              </li>
                              <li>
                                <span
                                  class={clsx(
                                    pops.liThree === true && styles.active
                                  )}
                                >
                                  li
                                </span>
                              </li>
                              <li>
                                <span
                                  class={clsx(
                                    pops.liFour === true && styles.active
                                  )}
                                >
                                  li
                                </span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span
                          class={clsx(
                            pops.divItemTwo === true && styles.active
                          )}
                        >
                          .item-2 <br />
                          div
                        </span>
                      </li>
                      <li>
                        <span
                          class={clsx(
                            pops.divItemThr === true && styles.active
                          )}
                        >
                          .item-3 <br />
                          div
                        </span>
                        <ul>
                          <li>
                            <span
                              class={clsx(
                                pops.divItemFour === true && styles.active
                              )}
                            >
                              .item-4 <br />
                              div
                            </span>
                            <ul>
                              <li>
                                <span
                                  class={clsx(
                                    pops.divItemFive === true && styles.active
                                  )}
                                >
                                  .item-5 <br />
                                  div
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
            </ul>
          </li>
          <li>
            {" "}
            <span class={clsx(pops.nav === true && styles.active)}>nav</span>
            <ul>
              <li>
                {" "}
                <span class={clsx(pops.ul === true && styles.active)}>ul</span>
                <ul>
                  <li>
                    <span class={clsx(pops.li === true && styles.active)}>
                      li
                    </span>
                    <ul>
                      <li>
                        <span class={clsx(pops.a === true && styles.active)}>
                          a
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
