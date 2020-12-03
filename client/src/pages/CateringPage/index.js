import React, { useState } from "react";
import "./CateringPage.css"

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

    const {fName, lName, email, phone, inquiry} = formState;

    return <div>
        <h3>Yes, We Cater!</h3>
        <form id="cateringForm">
            <label>First Name
            <input type="text" name="fName" value={fName} onChange={(e) => { updateFormValue(e) }}></input>
            </label>
            <label>Last Name
            <input type="text" name="lName" value={lName} onChange={(e) => { updateFormValue(e) }}></input>
            </label>
            <label>Email
            <input type="email" name="email" value={email} onChange={(e) => { updateFormValue(e) }}></input>
            </label>
            <label>Phone Number
            <input type="text" name="phone" value={phone} onChange={(e) => { updateFormValue(e) }}></input>
            </label>
            <label>Question
            <textarea type="tel"  placeholder="What do you want to know?" name="inquiry" value={inquiry} onChange={(e) => { updateFormValue(e) }}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default CateringPage;