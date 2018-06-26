import React from 'react';
import ProduceItems from './../ProduceItems/ProduceItems';

const availableProduce = [
  {
    month: "January",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  },
  {
    month: "February",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "March",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "April",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Garlic",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "May",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Cauliflower",
      "Garlic",
      "Lettuce",
      "Potatoes",
      "Radishes"
    ]
  },
  {
    month: "June",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Blackberries",
      "Cherries",
      "Raspberries",
      "Strawberries",
      "Asparagus",
      "Broccoli",
      "Cauliflower",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash"
    ]
  },
  {
    month: "July",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Raspberries",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "August",
    selection: [
      "Apples",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Pears",
      "Plums",
      "Raspberries",
      "Rhubarb",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "September",
    selection: [
      "Apples",
      "Blueberries",
      "Grapes",
      "Melons",
      "Peaches",
      "Pears",
      "Plums",
      "Raspberries",
      "Tomatoes",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "October",
    selection: [
      "Apples",
      "Grapes",
      "Hazelnuts",
      "Melons",
      "Peaches",
      "Pears",
      "Tomatoes",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Pumpkins",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "November",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "December",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  }
];

// function checkMonth() {
//   const currentMonth = new Date().getMonth();
//   const monthFromArr = availableProduce.map(monthDate => monthDate.month);
//   let currentMonthFromArr;
//   monthFromArr.forEach((month, index) => {
//     if(currentMonth === index) {
//       currentMonthFromArr = month;
//     }
//   })
//   return currentMonthFromArr;
// }

const curMonth = () => new Date().getMonth();

const fullMonth = () => {
  return availableProduce.map(monthDate => monthDate.month)[curMonth()];
}

const getMonthArr = (month) => {
  return availableProduce.map(current => current.selection)[month];
}

// function AvailableProduce() {
//   {availableProduce.map((current, index) =>
//     current.month === checkMonth() ? <ProduceItems month={current.month}/> : <p>Theres been an error</p>
//   )}
// }


function AvailableProduce() {
  const month = fullMonth();
  const monthArr = getMonthArr(curMonth());
  return (
    <div>
      <h3>Available Produce for {month}</h3>
      {monthArr.map((item, index) =>
        <p key={index}>{item}</p>
      )};
    </div>
  );
}

export default AvailableProduce;
