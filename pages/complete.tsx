import type { NextPage } from "next";
import { useRouter } from "next/router";

import styles from "../styles/Complete.module.css";

const Complete: NextPage = () => {
  const router = useRouter();
  const email = router.query["email"];
  const cred = router.query["cred"];

  return (
    <main className={styles.main}>
      <h1>Confirmation Email was sent!</h1>
      <dl className={styles.definitions}>
        <dt>email</dt>
        <dd>{email}</dd>
        <dt>cred</dt>
        <dd>{cred}</dd>
      </dl>
    </main>
  );
};

export default Complete;
