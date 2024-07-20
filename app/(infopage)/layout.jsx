import styles from "./layout.module.css";

export const metadata = {
  title: "COC Facts 2023 - Information",
  description: "project of ioweb",
};

export default function RootLayout({ children }) {
  return (
    <section className={styles.infoPage}>
      {children}
    </section>
  );
}
