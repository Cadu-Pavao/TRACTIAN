import React from "react";
import styles from "./Contact.module.css";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function Contact() {
  const [formStatus, setFormStatus] = React.useState("Enviar");

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Enviando...");
    const { email } = e.target.elements;
    let conFom = {
      email: email.value,
    };
    await delay(2000);
    setFormStatus("Sucesso!");
    console.log("Dados enviados com sucesso!", conFom);
  };

  return (
    <div className={styles.contactWrapper}>
      <span>Mantenha-se em contato.</span>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.formInput}
          type="text"
          id="email"
          placeholder="Insira seu e-mail"
          required
        />
        <button className={styles.formButton} type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}
