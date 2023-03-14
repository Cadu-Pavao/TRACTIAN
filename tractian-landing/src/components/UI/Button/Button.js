import styles from "./Button.module.css";

export function Button({ children, link, sm, green }) {
  const classes = `${styles.primary} ${sm ? styles.sm : ""} ${
    green ? styles.green : ""
  } `;

  return (
    <>
      <a href={link}>
        <button className={classes}>{children}</button>
      </a>
    </>
  );
}

Button.defaultProps = {
  children: "Button",
  link: "",
  sm: false,
};
