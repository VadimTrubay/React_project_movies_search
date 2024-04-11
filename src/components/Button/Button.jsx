import css from './Button.module.css';

export function Button({text, handleClick}) {
  return <button className={css.btn} onClick={handleClick}>{text}</button>;
}
