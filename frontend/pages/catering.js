import React, { useState } from "react";
import styles from "../styles/CateringPage.module.css";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";

const CateringPage = () => {

    const [formState, setForm] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        inquiry: ""
    })

    const updateFormValue = (event) => {
        const { name, value } = event.target;
        setForm(formState => ({ ...formState, [name]: value }));
    }

    const { fName, lName, email, phone, inquiry } = formState;

    const renderTextInput = (labelText, type, value) =>
        <div className={styles.inputDiv}>
            <label for={`${type}Field`}>{labelText}</label>
            <input id={`${type}Field`} type="text" name={type} value={value} onChange={(e) => { updateFormValue(e) }} />
        </div>


    const renderTextArea = (labelText, type, value) => <div className={styles.textAreaDiv}>

        <label for={`${type}Field`}>{labelText}</label>
        <textarea id={`${type}Field`} type="text" placeholder="What would you like to know?" name={type}
            value={value}
            onChange={(e) => { updateFormValue(e) }} />
    </div>




    return <Layout>
        <ContainerComponent>
            <h3>Yes, We Cater!</h3>
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
                <button type="submit">Submit</button>
            </form>
        </ContainerComponent>
    </Layout>
}

export default CateringPage;