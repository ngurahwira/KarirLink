const ButtonSubmit = ({ onClick, label }) => {
  return (
    <>
      <button className="button btn btn-primary" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default ButtonSubmit;
