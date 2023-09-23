import css from './Button.module.css';

export const Button = ({ loadmore, showButton }) => {
  return (
    <button
      type="button"
      className={css.Button}
      onClick={loadmore}
      disabled={showButton}
    >
      Load more
    </button>
  );
};
