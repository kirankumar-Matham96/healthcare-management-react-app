import { CarouselComponent } from "../../components/CarouselComponent";
import { Button } from "../../components/Button";
import { CustomCard } from "../../components/Card";
import homeStyles from "./index.module.css";

export const Home = () => {
  const imageSet = [
    {
      url: "https://res.cloudinary.com/do4v7miwh/image/upload/v1729167278/samples/Backgrounds/natanael-melchor-43LwvC-eQPM-unsplash_jddbwj.jpg",
      title: "Operation Theator",
      caption: "Precision and Care at Every Step",
    },
    {
      url: "https://res.cloudinary.com/do4v7miwh/image/upload/v1729167281/samples/Backgrounds/martha-dominguez-de-gouveia-ShJUYkshceY-unsplash_g8xlzd.jpg",
      title: "Accommodation",
      caption: "Where Comfort Meets Compassionate Care",
    },
    {
      url: "https://res.cloudinary.com/do4v7miwh/image/upload/v1729167277/samples/Backgrounds/marcel-scholte-LPurJnihmQI-unsplash_qva4z5.jpg",
      title: "Operation Equipment",
      caption: "Cutting-Edge Technology for Safer Surgeries",
    },
    {
      url: "https://res.cloudinary.com/do4v7miwh/image/upload/v1729167457/samples/Backgrounds/national-cancer-institute-oCLuFi9GYNA-unsplash_zniepc.jpg",
      title: "Lab Equipment",
      caption: "Advanced Lab Equipment for Reliable Diagnostics",
    },
  ];

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
      <section className={homeStyles.services}>
        <h2 className={homeStyles.h2}>Our Services</h2>
        <div className={homeStyles.serviceCardsContainer}>
          <CustomCard>
            <h2 className={homeStyles.cardHeading}>Appointments</h2>
            <p className={homeStyles.cardText}>
              Shows upcoming and past appointments
            </p>
          </CustomCard>
          <CustomCard>
            <h2 className={homeStyles.cardHeading}>Profile Management</h2>
            <p className={homeStyles.cardText}>
              Allows users to update their personal information
            </p>
          </CustomCard>
          <CustomCard>
            <h2 className={homeStyles.cardHeading}>Healthcare Record Form</h2>
            <p className={homeStyles.cardText}>
              For creating or updating health records
            </p>
          </CustomCard>
        </div>
      </section>
      <section className={homeStyles.about}>
        <div className={homeStyles.aboutContant}>
          <h2 className={homeStyles.h2 + " " + homeStyles.headingLeft}>
            About Us
          </h2>
          <p>
            We are a dedicated team of healthcare professionals committed to
            providing top-notch medical services to our community.
          </p>
        </div>
        <div className={homeStyles.carousel}>
          <CarouselComponent imageSet={imageSet} />
        </div>
      </section>
      <section className={homeStyles.feedback}></section>
      <section className={homeStyles.contacts}></section>
      <footer className={homeStyles.footer}></footer>
    </div>
  );
};
