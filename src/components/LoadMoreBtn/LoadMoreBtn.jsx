import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadPhoto }) => {
  return (
    <div className={css.load_photo}>
      <button type="button" onClick={loadPhoto}>
        Load photo
      </button>
    </div>
  );
};

export default LoadMoreBtn;
