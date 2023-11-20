"use client";

import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <h2 className={styles.primaryTitles}>My skills</h2>
      <div className={styles.majorContent}>
        <div className={styles.minorContent}>
          <p className={styles.textContent}>
            My name is Anton Koller and I am a 27 year old programmer with
            experience in JavaScript and TypeScript whilst simultaneously
            learning to code in both C# and Python to expand my capabilities. I
            am also versed in the use of various related frameworks and modules
            that accompany JS and TS, such as React, Next.js (which this website
            is built using), Express, Vue and Node to name a couple. Besides
            JavaScript, I am also experienced with MySQL and Git/GitHub,
            alongside the obvious CSS and HTML skills. I am currently working on
            expanding my knowledge of other JS frameworks like Angular to learn
            more about the various applications these frameworks have. You can
            find a link to my GitHub in the footer below!
          </p>
        </div>
        <div className={styles.imageContent}>
          <Image
            width={400}
            height={300}
            src="/unsplash-james-harrison.jpg"
            alt="a laptop on a desk displaying code next to a small plant"
            className={styles.imageContent}
          ></Image>
          <figcaption className={styles.figcaptionContent}>
            Photo by{" "}
            <a
              href="https://unsplash.com/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              James Harrison
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/vpOeXr5wmR4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </figcaption>
        </div>
      </div>
      <h2 className={styles.primaryTitles}>About me</h2>
      <div className={styles.majorContent}>
        <div className={styles.imageContent}>
          <Image
            width={400}
            height={300}
            src="/Anton.jpg"
            alt="me with a headset on"
            className={styles.imageContent}
          ></Image>
          <figcaption className={styles.figcaptionContent}>
            Photo by me!
          </figcaption>
        </div>
        <div className={styles.minorContent}>
          <p className={styles.textContent}>
            I am an outgoing and sociable person who likes to get to know people
            and create a positive atmosphere wherever I go. I am easy to get
            along with and work well together with people in teams as well as
            alone on an individual level. I am always eager to go above and
            beyond to get a product completed and perfected to the standards of
            the company and will not hesitate to sink a lot of my brainpower and
            energy into finding better efficiency and solutions to difficult
            tasks. I'm a very independent worker in terms of drive and function
            well both with and without clear directives. I am adaptable and a
            very fast learner, and I love to solve problems when they inevitably
            arise. I am eager to learn more about the things I have not yet had
            a chance to explore! You can find a link to my GitHub below!
          </p>
        </div>
      </div>
      <h2 className={styles.primaryTitles}>What I bring</h2>
      <div className={styles.majorContent}>
        <div className={styles.minorContent}>
          <p className={styles.textContent}>
            I have worked in a multitude of different types of jobs which I
            believe has given me a great number of experiences and skills that
            make me suitable for different types of work within programming and
            IT. They have given me different types of perspectives and methods
            to handle various problems. I have worked for some time as advanced
            IT Support and am no stranger to working both remotely and abroad.
            My English skills are superb and I am very adept at communicating
            with customers and staff alike. I have also worked for some time as
            a manager at Sweden's largest waterpark, where I was responsible for
            the operation and running of rollercoasters on top of staffing
            duties, which I believe has given me excellent management skills. To
            learn more about my work history, please follow the link below!
          </p>
        </div>
        <div className={styles.imageContent}>
          <Image
            width={400}
            height={300}
            src="/unsplash-alejandro-pinero-amerio.jpg"
            alt="a folded swiss army knife, brown"
          ></Image>
          <figcaption className={styles.figcaptionContent}>
            Photo by{" "}
            <a
              href="https://unsplash.com/es/@vjgalaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Alejandro Piñero Amerio
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/LHFuqK3KywE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </figcaption>
        </div>
      </div>
    </main>
  );
}
