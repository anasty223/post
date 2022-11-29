import s from './ButtonLoadMore.module.css'

export const ButtonLoadMore = ({ handleLoadMore }) => {
  return (
    <button className={s.buttonLoadMore}type="submit" onClick={handleLoadMore}>
      Load more
    </button>
  );
};
