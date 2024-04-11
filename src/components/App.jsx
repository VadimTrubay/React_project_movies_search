import {useEffect, useState} from "react";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import getImages from "./../services/imageSearchApi";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);
        const response = await getImages(query, page);
        const cleanData = response.data.results;
        setImages((prevImages) => [...prevImages, ...cleanData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  const onSearch = (queryText) => {
    setImages([]);
    setPage(1);
    setQuery(queryText);
  };

  const handleBtnClick = () => {
    setPage((page) => page + 1);
  };

  function onImageOpen(imageId) {
    setModalIsOpen(true);
    if (modalIsOpen) {
      return;
    }
    const selectedImage = images.find((image) => image.id === imageId);
    setSelectedImage(selectedImage);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      {loading && <Loader/>}
      {Array.isArray(images) && <ImageGallery images={images} onImageOpen={onImageOpen}/>}
      {Array.isArray(images) && <LoadMoreBtn loadPhoto={handleBtnClick}/>}
      {error && <ErrorMessage/>}
      {selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedImage={selectedImage.urls.regular}
        />
      )}
    </div>
  );
};

export default App;
