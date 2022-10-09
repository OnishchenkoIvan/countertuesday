type buttonPropsType = {
  title: string;
  onClickHandler: () => void;
  disabled: boolean;
};

export const UniversalButton = (props: buttonPropsType) => {
  return (
    <div>
      <button
        className={''}
        onClick={props.onClickHandler}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
};