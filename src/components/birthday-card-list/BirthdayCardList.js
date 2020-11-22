import React, { useState } from "react";
import BirthdayCard from "../birthdaycard/BirthdayCard";
import "./BirthdayCardList.css";

import data from "./../../data";
import CustomButton from "../custom-button/CustomButton";

export default function BirthdayCardList() {
  const [list, setList] = useState(data);

  const handleClick = () => {
    setList([]);
  };
  return (
    <div className="birthday-list-wrapper">
      <h4>{list.length} birthdays today</h4>
      {list.map((list) => (
        <BirthdayCard {...list} />
      ))}
      <CustomButton className="clear-button">Clear All</CustomButton>
    </div>
  );
}
