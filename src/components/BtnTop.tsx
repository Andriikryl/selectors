import styles from "../global/btnToTop.module.css";
export default function BtnTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={scrollToTop} class={styles.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 13q-.425 0-.712-.288T11 12V5.825L7.1 9.7q-.275.275-.687.288T5.7 9.7q-.275-.275-.275-.7t.275-.7l5.6-5.6q.15-.15.325-.212T12 2.425q.2 0 .375.063t.325.212l5.6 5.6q.275.275.275.688T18.3 9.7q-.3.3-.712.3t-.713-.3L13 5.825V12q0 .425-.288.713T12 13m0 5q-.425 0-.712-.288T11 17v-1q0-.425.288-.712T12 15q.425 0 .713.288T13 16v1q0 .425-.288.713T12 18m0 4q-.425 0-.712-.288T11 21q0-.425.288-.712T12 20q.425 0 .713.288T13 21q0 .425-.288.713T12 22"
        />
      </svg>
    </button>
  );
}
