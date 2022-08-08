import { string } from "@recoiljs/refine";
import { atom, useRecoilState } from "recoil";
import { syncEffect } from "recoil-sync";

import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import Link from "next/link";

type Phase = "email" | "cred";
export const phaseState = atom<Phase>({
  key: "phaseState",
  default: "email",
  effects: [
    syncEffect({
      storeKey: "url-json-store",
      refine: string(/^(email|cred)$/),
    }),
  ],
});

export const emailState = atom<string>({
  key: "emailState",
  default: "",
  effects: [syncEffect({ storeKey: "url-json-store", refine: string() })],
});

export const credState = atom<string>({
  key: "credState",
  default: "",
  effects: [syncEffect({ storeKey: "url-json-store", refine: string() })],
});

const Home: NextPage = () => {
  const [phase, setPhase] = useRecoilState(phaseState);
  const [email, setEmail] = useRecoilState(emailState);
  const [cred, setCred] = useRecoilState(credState);

  return (
    <main className={styles.container}>
      {phase === "email" ? (
        <>
          <h1 className={styles.title}>Please enter your email address</h1>
          <input
            className={styles.input}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button className={styles.next} onClick={() => setPhase("cred")}>
            Next
          </button>
        </>
      ) : phase === "cred" ? (
        <>
          <h1 className={styles.title}>
            Please enter your credential information (address, credit card,
            etc...)
          </h1>
          <textarea onChange={(e) => setCred(e.currentTarget.value)} />
          <Link
            href={{
              pathname: "/complete",
              query: {
                email,
                cred,
              },
            }}
            passHref
          >
            <a>
              <button>Next</button>
            </a>
          </Link>
        </>
      ) : null}
    </main>
  );
};

export default Home;
