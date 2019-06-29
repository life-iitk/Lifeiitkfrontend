import React from "react";
import "./card.css";
const Card = props => {
  const isMob = window.innerWidth < 600;
  const elems = [
    [
      //hall1
      {
        title: "Sunday",
        breakfast: ["hall1sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thursday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ],
    [
      //hall2
      {
        title: "Sunday",
        breakfast: ["hall2sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thurday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ],
    [
      //hall3
      {
        title: "Sunday",
        breakfast: ["hall3sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thurday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ],
    [
      //hall4
      {
        title: "Sunday",
        breakfast: ["hall4sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thurday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["disfdsh1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ],
    [
      //hall5
      {
        title: "Sunday",
        breakfast: ["hall5sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thurday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ],
    [
      //hall6
      {
        title: "Sunday",
        breakfast: ["hall6sdish1", "sdish2", "sdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Monday",
        breakfast: ["mdish1", "mdish2", "mdish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Tuesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Wednesday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Thurday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Friday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      },
      {
        title: "Saturday",
        breakfast: ["dish1", "dish2", "dish3"],
        lunch: ["dish1", "dish2", "dish3"],
        dinner: ["dish1", "dish2", "dish3"]
      }
    ]
  ];

  return (
    <React.Fragment>
      <div className="row">
        <h1 className="left-pad">
          {elems[props.selectedHall - 1][props.day].title}
        </h1>
      </div>
      <br />

      <div className="breakfast card scroll style-1">
        <h2>Breakfast</h2>
        <ol>
          {elems[props.selectedHall - 1][props.day].breakfast.map(x => {
            return <li key={x}>{x}</li>;
          })}
        </ol>
      </div>
      {isMob ? <br /> : ""}
      <div className="lunch card scroll style-1">
        <h2>Lunch</h2>
        <ol>
          {elems[props.selectedHall - 1][props.day].lunch.map(x => {
            return <li key={x}>{x}</li>;
          })}
        </ol>
      </div>
      {isMob ? <br /> : ""}
      <div className="dinner card scroll style-1">
        <h2>Dinner</h2>
        <ol>
          {elems[props.selectedHall - 1][props.day].dinner.map(x => {
            return <li key={x}>{x}</li>;
          })}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default Card;
