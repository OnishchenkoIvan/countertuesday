import React from "react";
import { UniversalDisplay } from "../UniversalDisplay/UniversalDisplay";
import { UniversalButton } from "../UniversalButton/UniversalButton";

type CounterPropsType = {
  countCurent: number;
  onClickIncrement: () => void;
  onClickReset: () => void;
  countMax: number;
  countStart: number;
};

export const Counter = (props: CounterPropsType) => {
  return (
    <div>
      <div className={"container"}>
        <UniversalDisplay count={props.countCurent} />
        <div className={"buttons"}>
          <UniversalButton
            onClickHandler={props.onClickIncrement}
            disabled={props.countCurent === props.countMax}
            title={"Increment"}
          ></UniversalButton>
          <UniversalButton
            onClickHandler={props.onClickReset}
            title={"Reset"}
            disabled={props.countCurent === props.countStart}
          ></UniversalButton>
        </div>
      </div>
    </div>
  );
};
