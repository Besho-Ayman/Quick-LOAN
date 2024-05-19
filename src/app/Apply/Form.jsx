"use client"
import React, { useState } from 'react'
import styles from './formStyle.css';

export const Form = () => {
    const [Gender, setGender] = useState("")
    const [MaritalStatus, setMaritalStatus] = useState("")
    const [Dependents, setDependents] = useState("")
    const [Education, setEducation] = useState("")
    const [Self_Employed, setSelf_Employed] = useState("")
    const [ApplicantIncome, setApplicantIncome] = useState("")
    const [CoapplicantIncome, setCoapplicantIncome] = useState("")
    const [LoanAmount, setLoanAmount] = useState("")
    const [Loan_Amount_Term, setLoan_Amount_Term] = useState("")
    const [Credit_History, setCredit_History] = useState("")
    const [Total_Income, setTotal_Income] = useState("")
    const [Age, setAge] = useState("")
    const [Experience, setExperience] = useState("")
    const [CD_Account  , setCD_Account ] = useState("")

    function displayResponse(data) {
        
        console.log(data);
        const responseElement = document.getElementById('response');
        alert(`Response from server: ${JSON.stringify(data, null, 2)}`);

    }
    
    //create function to send data to database
        function sendData() {
            let data = { Gender, MaritalStatus, Dependents, Age, Education, Experience, LoanAmount, Loan_Amount_Term, CD_Account, CoapplicantIncome, Credit_History, Total_Income, ApplicantIncome, Self_Employed, }
            console.log(data)
            fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    displayResponse(data);
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                    alert('Failed to send data. Please try again later. ');
                });
        }

    return (
        <div className="container">
            <div id="form">

                {/* <input type="text" id="gender" class="amount" name="gender" placeholder=" Gender" onChange={(e) => { setGender(e.target.value) }} /> */}
                <input type="number" id="dependents" class="amount" name="dependents" placeholder=" Number of Dependents" onChange={(e) => { setDependents(e.target.value) }} />
                {/* <input type="text" id="education" class="amount" name="education" placeholder=" Education" onChange={(e) => { setEducation(e.target.value) }} /> */}
                {/* <input type="text" id="selfEmployed" class="amount" name="selfEmployed" placeholder="Enter Self Employed" onChange={(e) => { setSelf_Employed(e.target.value) }} /> */}
                <input type="number" id="applicantIncome" class="amount" name="applicantIncome" placeholder=" Applicant Income" onChange={(e) => { setApplicantIncome(e.target.value) }} />
                <input type="number" id="coapplicantIncome" class="amount" name="coapplicantIncome" placeholder=" Coapplicant Income" onChange={(e) => { setCoapplicantIncome(e.target.value) }} />
                <input type="number" id="loanAmount" class="amount" name="loanAmount" placeholder=" Loan Amount" onChange={(e) => { setLoanAmount(e.target.value) }} />
                <input type="number" id="loanAmountTerm" class="amount" name="loanAmountTerm" placeholder=" Loan Amount Term" onChange={(e) => { setLoan_Amount_Term(e.target.value) }} />
                {/* <input type="number" id="creditHistory" class="amount" name="creditHistory" placeholder=" Credit History" onChange={(e) => { setCredit_History(e.target.value) }} /> */}
                <input type="number" id="totalIncome" class="amount" name="totalIncome" placeholder=" Total Income" onChange={(e) => { setTotal_Income(e.target.value) }} />
                <input type="number" id="age" name="age" class="amount" placeholder="Enter Age" onChange={(e) => { setAge(e.target.value) }} />
                <input type="number" id="experience" class="amount" name="experience" placeholder=" Experience" onChange={(e) => { setExperience(e.target.value) }} />
                <br />
                {/* ..... */}
                <>
                    {/* <label htmlFor="Marital">Gender</label><br /> */}
                    <select
                        className="select"
                        id="setGender"
                        onChange={(e) => setGender(e.target.value)}
                        value={Gender}
                    >
                        <option value="">Select Gender</option>

                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        {Gender === "Male" ? "Male" : Gender === "Female" ? "Female" : "None"}
                    </select>

                </>
                <>
                    {/* <label htmlFor="setEducation"> Education</label><br /> */}
                    <select className="select" id="setEducation" onChange={(e) => { setEducation(e.target.value) }}>
                        <option value="">Select Education</option>
                        <option value="Student">Student</option>
                        <option value="Graduate">Graduate</option>
                        {Education === "Student" ? "Student" : Gender === "Graduate" ? "Graduate" : "None"}

                    </select>
                </>
                <>
                    {/* <label htmlFor="Marital"> Self Employed</label><br /> */}
                    <select className="select" id="selfEmployed" onChange={(e) => { setSelf_Employed(e.target.value) }}>
                        <option value="">Select Self Employed</option>

                        <option value="1">Yas</option>
                        <option value="0">No</option>
                        {Self_Employed === "1" ? "Yas" : Gender === "0" ? "No" : "None"}

                    </select>
                </>
                <>
                    {/* <label htmlFor="MaritalStatus"> Marital Status</label><br /> */}
                    <select className="select" id="maritalStatus" onChange={(e) => { setMaritalStatus(e.target.value) }}>
                        <option value="">Select Marital Statusy</option>

                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        {MaritalStatus === "Single" ? "Single" : Gender === "Married" ? "Married" : "None"}

                    </select>
                </>
                <>
                    {/* <label htmlFor="Credit_History">Credit History</label><br /> */}
                    <select className="select" id="Credit_History" onChange={(e) => { setCredit_History(e.target.value) }}  value={Credit_History}>
                        <option value="">Select Credit History</option>
                        <option value="1">Good</option>
                        <option value="0">Bad</option>
                        {Credit_History === "1" ? "Good" : Gender === "0" ? "Bad" : "None"}
                    </select>
                </>
                <>
                    {/* <label for="cdAccount" >CD Account:</label> */}
                    {/* <br/> */}
                    <select id="CD_Account" className="select" name="cdAccount" onChange={(e) => { setCD_Account (e.target.value) }}value={CD_Account }>
                        <option value=""> CD Account</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                        {CD_Account  === "1" ? "Yes" : Gender === "0" ? "No" : "None"}

                    </select>
                </>
                <div className="buttonContainer">
                    <button className="sendButton" onClick={() => { sendData() }}>Submit</button>
                </div>  </div>
            <div id="response"></div>
        </div>
    )
}
export default Form;
