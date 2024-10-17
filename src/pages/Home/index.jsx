import { CarouselComponent } from "../../components/CarouselComponent";
import { Button } from "../../components/Button";
import { CustomCard } from "../../components/Card";
import { ContactForm } from "../../components/ContactForm";
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

  const feedback = [
    {
      message:
        "From the moment I arrived, I was treated with kindness and respect. The staff made sure I was comfortable and answered all of my questions patiently. The facilities were top-notch, and I felt that the entire team was genuinely concerned about my well-being. I couldn’t have asked for better care during my hospital stay.",
      patient: "John Doe",
    },
    {
      message:
        "The care I received at the hospital was beyond my expectations. The medical team was highly professional, and they made sure to keep me informed at every stage of my surgery. The nurses were attentive and always ready to help, no matter the time of day. The room was clean and quiet, which helped me recover faster.",
      patient: "Alice",
    },
    {
      message:
        "I had a very positive experience throughout my treatment. The doctors and nurses were not only skilled but also compassionate. They took the time to explain my diagnosis and treatment options in detail, which helped ease my anxiety. The hospital facilities were modern and well-maintained.",
      patient: "Jake",
    },
    {
      message:
        "My surgery and recovery process went smoother than I could have imagined. The surgical team was incredibly professional, and I felt safe and reassured in their care. The post-op care was also remarkable. The nurses were always available and made sure I was comfortable and recovering well.",
      patient: "Malini",
    },
    {
      message:
        "The entire experience at this hospital was outstanding. From the moment I checked in, I felt like I was in good hands. The staff was incredibly welcoming, and the doctors took the time to thoroughly explain my treatment plan. The patient rooms were spacious and equipped with everything I needed for a comfortable stay. ",
      patient: "Vivek",
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
      <section className={homeStyles.feedback}>
        <h2 className={homeStyles.h2}>What Our Patients Say</h2>
        <CarouselComponent feedback={feedback} />
      </section>
      <section className={homeStyles.contacts}>
        <h2 className={homeStyles.h2}>Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
};
