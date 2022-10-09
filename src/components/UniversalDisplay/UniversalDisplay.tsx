import s from './UniversalDisplay.module.css'

type countDisplay = {
  count: number;
};

export const UniversalDisplay = (props: countDisplay) => {
  return (
    <div className={props.count === 5 ? s.stop : ""}>
      <div className={s.countDisplay}>
        <div>{props.count}</div>
      </div>
    </div>
  );
};