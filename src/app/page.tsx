
import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (
    <div className={styles.page}>
      {/*<form action="/submit">ТОЛЬКО GET ЗАПРОСЫ */ }
      {/*  <input type="text" name={'name'}/>*/}
      {/*  <input type="password" name={'password'}/>*/}
      {/*  <button>submit</button>*/}
      {/*</form>*/}
        <Form action={'/submit'}>
            <input type="text" name={'name'}/>
            <input type="password" name={'password'}/>
            <button>submit</button>
        </Form>
    </div>
  );
}
