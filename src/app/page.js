import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Child value={1}/>
      <div>
        <h1>This is next.js by anil</h1>
      </div>
    </main>
  );
}

const Child = ({value})=>{
  return (
    <div>This is Child {value}</div>
  )

}