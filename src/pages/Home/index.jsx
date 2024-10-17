import { Button } from "../../components/Button";
import homeStyles from "./index.module.css";

export const Home = () => {
  return (
    <div className={homeStyles.bgContainer}>
      <header className={homeStyles.hero}>
        <h1>Welcome to Healthcare Management System</h1>
        <p>Your health, our priority. Comprehensive care at your fingertips.</p>
        <Button class="btn btn-secondary">Get Started</Button>
      </header>
      <section className={homeStyles.services}></section>
      <section className={homeStyles.About}></section>
      <section className={homeStyles.feedback}></section>
      <section className={homeStyles.contacts}></section>
      <footer className={homeStyles.footer}></footer>
    </div>
  );
};
