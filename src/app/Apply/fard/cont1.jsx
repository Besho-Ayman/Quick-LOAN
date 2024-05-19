import React from 'react';
import styles from './cont1.module.css';
import axios from 'axios'; 

class FormComponent extends React.Component {

  render() {
    return (
      <div>
         <h2>Loan Application Form</h2>
         < div class="form-group">
         <div id="form">
              <label for="gender">Gender:</label>
              <input type="text" id="gender" name="gender" placeholder="Enter Gender"/>
          </div>
          <div class="form-group">
              <label for="maritalStatus">Marital Status:</label>
              <input type="text" id="maritalStatus" name="maritalStatus" placeholder="Enter Marital Status"/>
          </div>
          <div class="form-group">
              <label for="dependents">Dependents:</label>
              <input type="number" id="dependents" name="dependents" placeholder="Enter Number of Dependents"/>
          </div>
          <div class="form-group">
              <label for="education">Education:</label>
              <input type="text" id="education" name="education" placeholder="Enter Education"/>
          </div>
          <div class="form-group">
              <label for="selfEmployed">Self Employed:</label>
              <input type="text" id="selfEmployed" name="selfEmployed" placeholder="Enter Self Employed"/>
          </div>
          <div class="form-group">
              <label for="applicantIncome">Applicant Income:</label>
              <input type="number" id="applicantIncome" name="applicantIncome" placeholder="Enter Applicant Income"/>
          </div>
          <div class="form-group">
              <label for="coapplicantIncome">Coapplicant Income:</label>
              <input type="number" id="coapplicantIncome" name="coapplicantIncome"placeholder="Enter Coapplicant Income"/>
          </div>
          <div class="form-group">
              <label for="loanAmount">Loan Amount:</label>
              <input type="number" id="loanAmount" name="loanAmount" placeholder="Enter Loan Amount"/>
          </div>
          <div class="form-group">
              <label for="loanAmountTerm">Loan Amount Term:</label>
              <input type="number" id="loanAmountTerm" name="loanAmountTerm" placeholder="Enter Loan Amount Term"/>
          </div>
          <div class="form-group">
              <label for="creditHistory">Credit History:</label>
              <input type="number" id="creditHistory" name="creditHistory" placeholder="Enter Credit History"/>
          </div>
          <div class="form-group">
              <label for="totalIncome">Total Income:</label>
              <input type="number" id="totalIncome" name="totalIncome" placeholder="Enter Total Income"/>
          </div>
          <div class="form-group">
              <label for="age">Age:</label>
              <input type="number" id="age" name="age" placeholder="Enter Age"/>
          </div>
          <div class="form-group">
              <label for="experience">Experience:</label>
              <input type="number" id="experience" name="experience" placeholder="Enter Experience"/>
          </div>
          </div>
           <button class="btn" onclick="submitForm()">Submit</button>
          <div id="response"></div>  
          </div>








     

    );
  }
}

export default FormComponent;
