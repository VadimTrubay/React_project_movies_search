import css from "./ImageCard.module.css";

const ImageCard = ({ id, urls, onImageOpen }) => {
  return (
    <>
      <img
        onClick={() => onImageOpen(id)}
        className={css.image_card}
        src={urls.small}
        alt="image"
      />
    </>
  );
};
export default ImageCard;
