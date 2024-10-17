import { Button } from "../../components/Button";
import homeStyles from "./index.module.css";

export const Home = () => {
  return (
    <div className={homeStyles.bgContainer}>
      <header className={homeStyles.hero}>
        <h1 className={homeStyles.h1}>
          Welcome to Healthcare Management System
        </h1>
        <p className={homeStyles.subH}>
          Your health, our priority. Comprehensive care at your fingertips.
        </p>
        <Button class="btn secondary-btn">Get Started</Button>
      </header>
      <section className={homeStyles.services}></section>
      <section className={homeStyles.About}></section>
      <section className={homeStyles.feedback}></section>
      <section className={homeStyles.contacts}></section>
      <footer className={homeStyles.footer}></footer>
    </div>
  );
};
