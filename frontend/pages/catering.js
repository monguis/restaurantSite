import React, { useState } from "react";
import styles from "../styles/CateringPage.module.css";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";
import { sendNotificationEmail, sendAdminNotificationEmail } from "../util/API"

const CateringPage = () => {

    const [formState, setForm] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        inquiry: ""
    })

    const validateInput = (value, type) => {
        const REGEX = {
            fName: /^([^0-9]*)$/,
            lName: /^([^0-9]*)$/,
            email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            phone: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
            inquiry: ""
        }

        const checkedStringArray = value.trim().match(REGEX[type]);

        if (checkedStringArray === null) return false;

        return !!checkedStringArray[0];
    }

    const { fName, lName, email, phone, inquiry } = formState;

    const updateFormValue = (event) => {
        const { name, value } = event.target;
        setForm(formState => ({ ...formState, [name]: value }));
    }

    const handleSubmitForm = async evt => {
        evt.preventDefault();
        sendNotificationEmail(formState).then(({ data }) => console.log(data));
        sendAdminNotificationEmail(formState).then(({ data }) => console.log(data));
    }

    const renderTextInput = (labelText, type, value) =>
        <div className={styles.inputDiv}>
            <label for={`${type}Field`}>{labelText}</label>
            <input id={`${type}Field`}
                type="text"
                name={type}
                value={value}
                onChange={updateFormValue}
                onBlur={() => { validateInput(value, type) }} />
        </div>


    const renderTextArea = (labelText, type, value) => <div className={styles.textAreaDiv}>

        <label for={`${type}Field`}>{labelText}</label>
        <textarea id={`${type}Field`} type="text" placeholder="What would you like to know?" name={type}
            value={value}
            onChange={(e) => { updateFormValue(e) }} />
    </div>




    return <Layout>
        <ContainerComponent >
            <div className={styles.cateringPageWrapper}>
                <h3 className={styles.pageTitle}>Yes, We Cater!</h3>
                <div className={styles.cateringLegendWrapper}>
                    <p className={styles.cateringLegend}>
                        We are honored to be part of your special moments, and We know you want it to be perfect. Tell us about it, we will do our best to make that moment even more memorable.
                    </p>
                </div>
                <form id={styles.cateringForm}>
                    {renderTextInput("First Name", "fName", fName)}
                    {renderTextInput("Last Name", "lName", lName)}
                    {renderTextInput("Phone Number", "phone", phone)}
                    {renderTextInput("Email", "email", email)}
                    {renderTextArea("What's your question?", "inquiry", inquiry)}
                    <button className={styles.submitButton} type="submit" onClick={handleSubmitForm}>Submit</button>
                </form>
            </div>
        </ContainerComponent>
    </Layout>
}

export default CateringPage;