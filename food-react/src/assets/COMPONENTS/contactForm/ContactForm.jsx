 
import Button from "../button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const onSubmit=(event)=>{
    event.preventDefault();


    console.log("NAME",event.target[0].value);
    console.log("EMAIL",event.target[1].value);
    console.log("TEXT",event.target[2].value) ;
    }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/call.png" alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.btn}>
          <Button text="VIA MESSAGE" />
          <Button text="VIA CALL" />
        </div>
        <Button className="btn3" isOutline={true} text="VIA EMAIL FORM " />
        <form  onSubmit={onSubmit} >
        <div className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.form}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className={styles.form}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8"></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
          text="SUBMIT" />
        </div>
  </form>

      </div>
    </div>
    
  );
};

export default ContactForm;
