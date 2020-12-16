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

    const [validatedForm, setValidatedForm] = useState(false);

    const changeBorderColor = (condition, event) => {
        const targetedElement = event.target;
        targetedElement.style.borderColor = condition ? "green" : "red";
    }

    const validateInput = (type) => {
        const value = formState[type];
        const REGEX = {
            fName: /^([^0-9]*)$/,
            lName: /^([^0-9]*)$/,
            email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            phone: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
            inquiry: /(?!^$)([^\s])/
        }
        const checkedStringArray = value.match(REGEX[type]);

        if (checkedStringArray === null) return false;

        return !!checkedStringArray[0];
    }

    const handleValidateForm = () => {
        setValidatedForm(() => {
            for (const key in formState) {
                if (!validateInput(key)) {
                    return false
                }
            }
            return true
        }
        )
    }

    const updateFormValue = (event) => {
        const { name, value } = event.target;
        setForm(formState => ({ ...formState, [name]: value }));
        handleValidateForm();
    }



    const handleSubmitForm = async evt => {
        evt.preventDefault();
        if (validatedForm) {
            sendNotificationEmail(formState).then(({ data }) => console.log(data));
            // sendAdminNotificationEmail(formState).then(({ data }) => console.log(data));
        }
    }

    const renderTextInput = (labelText, type) => {
        const value = formState[type];
        return <div className={styles.inputDiv}>
            <label htmlFor={`${type}Field`}>{labelText}</label>
            <input id={`${type}Field`}
                type="text"
                name={type}
                value={value}
                onChange={updateFormValue}
                onBlur={(evt) => {
                    changeBorderColor(validateInput(type), evt)
                }} />
        </div>
    }

    const renderTextArea = (labelText, type) => {
        const value = formState[type];
        return <div className={styles.textAreaDiv}>
            <label htmlFor={`${type}Field`}>{labelText}</label>
            <textarea id={`${type}Field`} type="text" placeholder="What would you like to know?" name={type}
                value={value}
                onChange={(e) => { updateFormValue(e) }}
                onBlur={(evt) => {
                    changeBorderColor(validateInput(type), evt)
                    handleValidateForm();
                }} />
        </div>
    }


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
                    {renderTextInput("First Name", "fName")}
                    {renderTextInput("Last Name", "lName")}
                    {renderTextInput("Phone Number", "phone")}
                    {renderTextInput("Email", "email")}
                    {renderTextArea("What's your question?", "inquiry")}
                    <button disabled={!validatedForm} className={styles.submitButton} type="submit" onClick={handleSubmitForm}>Submit</button>
                </form>
            </div>
        </ContainerComponent>
    </Layout>
}

export default CateringPage;