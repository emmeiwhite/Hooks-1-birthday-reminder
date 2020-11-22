import React from "react";
import "./BirthdayCard.css";

export default function BirthdayCard({ id, name, image, age }) {
  return (
    <section className="birthday-card" key={id}>
      <article>
        <img src={image} alt="person image" className="person-image" />
      </article>

      <article className="person-details">
        <span className="person-name">{name}</span>
        <span className="person-age">{age} years</span>
      </article>
    </section>
  );
}
