import { For } from "solid-js";
import { ContentBox } from "./ContentBox";

const dataSelectors = [
  {
    title: "Universal selector (*)",
    description:
      "A type selector is the name of a document language element type, and represents an instance of that element type in the document tree.",
    selector: "* div{border-radius: 50%}",
    type: "basic",
    extraEx: false,
  },
  {
    title: "Type (tag name) selector",
    description:
      "  It is written as a CSS qualified name with an asterisk (* U+002A) as the local name. Like a type selector, the universal selector can be qualified by a namespace, restricting it to only elements belonging to that namespace, and is affected by a default namespace as defined in § 5.3 Namespaces in Elemental Selectors.",
    selector: " div{border-radius: 50%}",
    type: "basic",
    extraEx: false,
  },
  {
    title: "The Negation (Matches-None) Pseudo-class: :not()",
    description:
      "The negation pseudo-class, :not(), is a functional pseudo-class taking a <complex-real-selector-list> as an argument. It represents an element that is not represented by its argument.",
    selector: `"div:not(.item-1, imte-3){
        filter: blur(10px);
     }",`,
    type: "not",
    extraEx: false,
  },
  {
    title: "The Matches-Any Pseudo-class: :is()",
    description: `
      The matches-any pseudo-class, :is(), is a functional pseudo-class taking a <forgiving-selector-list> as its sole argument.

If the argument, after parsing, is an empty list, the pseudo-class is valid but matches nothing. Otherwise, the pseudo-class matches any element that matches any of the selectors in the list.
      `,
    selector: `
    ol:is(li:nth-child(3), li:nth-child(4),){
      filter: blur(10px);
  }
    `,
    type: "is",
    extraEx: false,
  },
  {
    title: "The Specificity-adjustment Pseudo-class: :where()",
    description: `
    The Specificity-adjustment pseudo-class, :where(), is a functional pseudo-class with the same syntax and functionality as :is(). Unlike :is(), neither the :where() pseudo-class, nor any of its arguments, contribute to the specificity of the selector—​its specificity is always zero.

    This is useful for introducing filters in a selector while keeping the associated style declarations easy to override.
      `,
    selector: `
      ol:is(li:nth-child(1), li:nth-child(2),){
        filter: blur(10px);
    }
      `,
    type: "where",
    extraEx: false,
  },
  {
    title: "The Relational Pseudo-class: :has()",
    description: `
    The relational pseudo-class, :has(), is a functional pseudo-class taking a <relative-selector-list> as an argument. It represents an element if any of the relative selectors would match at least one element when anchored against this element.
      `,
    selector: `
    section:has(aside, picture){
      background-color: tomato;
  }
    `,
    type: "has",
    extraEx: true,
  },
  {
    title: "Class selectors",
    description: `
      The class selector is given as a full stop (. U+002E) immediately followed by an identifier. It represents an element belonging to the class identified by the identifier, as defined by the document language. For example, in [HTML5], [SVG11], and [MATHML] membership in a class is given by the class attribute: in these languages it is equivalent to the ~= notation applied to the local class attribute (i.e. [class~=identifier]).
      `,
    selector: ".calss-5{filter: blur(10px);}",
    type: "class",
    extraEx: false,
  },
  {
    title: " ID selectors",
    description: `
    Document languages may contain attributes that are declared to be of type ID. What makes attributes of type ID special is that no two such attributes can have the same value in a conformant document, regardless of the type of the elements that carry them; whatever the document language, an ID typed attribute can be used to uniquely identify its element. In HTML all ID attributes are named id; XML applications may name ID attributes differently, but the same restriction applies. Which attribute on an element is considered the “ID attribute“ is defined by the document language.
      `,
    selector: "#id-5{filter: blur(10px);}",
    type: "id",
    extraEx: false,
  },
  {
    title: "Attribute presence and value selectors",
    description: `
    CSS2 introduced four attribute selectors:  [att] /  [att=val] / [att~=val] / [att|=val]
      `,
    selector: `span [att="4"]{background-color: tomato;}`,
    type: "attribute",
    extraEx: false,
  },
  {
    title: "Selector Lists",
    description: `
    A comma-separated list of selectors represents the union of all elements selected by each of the individual selectors in the selector list. (A comma is U+002C.) For example, in CSS when several selectors share the same declarations, they may be grouped into a comma-separated list. White space may appear before and/or after the comma.
      `,
    selector: `picture, img, p, a{background-color: tomato;}`,
    type: "lists",
    extraEx: false,
  },
  {
    title: "Descendant combinator ( )",
    description: `
    At times, authors may want selectors to describe an element that is the descendant of another element in the document tree (e.g., "an em element that is contained within an H1 element"). The descendant combinator expresses such a relationship.
    A descendant combinator is whitespace that separates two compound selectors.
      `,
    selector: `ol li{background-color: tomato;}`,
    type: "descendant",
    extraEx: false,
  },
  {
    title: "Next-sibling combinator (+)",
    description: `
    At times, authors may want selectors to describe an element that is the descendant of another element in the document tree (e.g., "an em element that is contained within an H1 element"). The descendant combinator expresses such a relationship.
    A descendant combinator is whitespace that separates two compound selectors.
      `,
    selector: `ol li:first-of-type + li{background-color: tomato;}`,
    type: "next",
    extraEx: false,
  },
  {
    title: "Child combinator (>)",
    description: `
    A child combinator describes a childhood relationship between two elements. A child combinator is made of the "greater-than sign" (U+003E, >) code point and separates two compound selectors.
      `,
    selector: `section > aside{background-color: tomato;}`,
    type: "child",
    extraEx: false,
  },
  {
    title: "Subsequent-sibling combinator (~)",
    description: `
    The subsequent-sibling combinator is made of the "tilde" (U+007E, ~) code point that separates two compound selectors. The elements represented by the two compound selectors share the same parent in the document tree and the element represented by the first compound selector precedes (not necessarily immediately) the element represented by the second one.
      `,
    selector: `#id ~ span{background-color: tomato;}`,
    type: "child",
    extraEx: false,
  },
  {
    title: "lobotomized owl (*+*)",
    description: `
    A selector pattern known as the lobotomized owl where all elements that have a preceding sibling are selected. Use it for example to add spacing to elements within a container except for the first element, which has no preceding sibling.
      `,
    selector: `ol *+*{background-color: tomato;}`,
    type: "owl",
    extraEx: false,
  },
];

export function SelectorsGroup() {
  return (
    <div>
      <For each={dataSelectors}>
        {(item, index) => (
          <ContentBox
            title={item.title}
            description={item.description}
            selector={item.selector}
            type={item.type}
            extraEx={item.extraEx}
          />
        )}
      </For>
    </div>
  );
}
