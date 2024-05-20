from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load('final_neural_network_model.pkl')

from flask_cors import CORS
CORS(app)  # Enable CORS for all origins


# Importing the required libraries


import sqlite3

import hashlib

import jwt

app.config['SECRET_KEY'] = '0A1S2AD1S3A54C5ASC144SA65F41AS65F4'



# Generate JWT token
def generate_tokens(user_email):
    access_token = jwt.encode({'email': user_email}, app.config['SECRET_KEY'], algorithm='HS256')
    refresh_token = jwt.encode({'email': user_email}, app.config['SECRET_KEY'], algorithm='HS256')
    return access_token, refresh_token



# Verify JWT token
def verify_token(token):
    try:
        decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return decoded_token['email']
    except jwt.ExpiredSignatureError:
        return None  # Token expired
    except jwt.InvalidTokenError:
        return None  # Invalid token
    


## Sign Up API using sqlite3 database creating a user table with email, phone, password, name
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    if not data:
        return jsonify({'message': 'Invalid request'}), 400

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')

    # hash the password
    password = password.encode('utf-8')
    password = hashlib.sha256(password).hexdigest()


    conn = sqlite3.connect('sqlite.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            email TEXT PRIMARY KEY NOT NULL UNIQUE,
            phone TEXT NOT NULL UNIQUE,
            password TEXT,
            name TEXT
        )
    ''')

    cursor.execute("INSERT INTO users (email, phone, password, name) VALUES (?, ?, ?, ?)", (email, phone, password, name))
    conn.commit()

    return jsonify({'message': 'User registered successfully'})




## Login API using sqlite3 database

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data:
        return jsonify({'message': 'Invalid request'}), 400

    email = data.get('email')
    password = data.get('password')

    # hash the password
    password = password.encode('utf-8')
    password = hashlib.sha256(password).hexdigest()

    conn = sqlite3.connect('sqlite.db')
    cursor = conn.cursor()

    

    cursor.execute("SELECT * FROM users WHERE email=? AND password=?", (email, password))
    user = cursor.fetchone()

    

    if not user:
        return jsonify({'message': 'Invalid credentials'}), 401
    

    # Generate JWT token
    access_token, refresh_token = generate_tokens(user[0])

    return jsonify(
        {
        'message': 'Login successful',
        'email': user[0],
        'phone': user[1],
        'name': user[3],

        "access_token": access_token,
        "refresh_token": refresh_token,
        }
    )





# Define function to encode categorical variables
def encode_categorical(data):

    # Define a dictionary to map categorical variables to binary values
    binary_mapping = {
        "Gender": {"Male": 1, "Female": 0},
        "MaritalStatus": {"single": 1, "married": 0},
        "Education": {"Graduate": 1, "Not Graduate": 0},
        "Self_Employed": {"Yes": 1, "No": 0}
        
    }
    for key, value in data.items():
        if key in binary_mapping:
            data[key] = binary_mapping[key].get(value, 0)  # Convert value to 0 or 1 if applicable
    return data


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get data from the request    


    # Extract data from the request
    gender = data.get('Gender')
    marital_status = data.get('MaritalStatus')
    dependents = data.get('Dependents')
    education = data.get('Education')
    self_employed = data.get('Self_Employed')
    applicant_income = data.get('ApplicantIncome')
    coapplicant_income = data.get('CoapplicantIncome')
    loan_amount = data.get('LoanAmount')
    loan_amount_term = data.get('Loan_Amount_Term')
    credit_history = data.get('Credit_History')
    total_income = data.get('Total_Income')
    age = data.get('Age')
    experience = data.get('Experience')
    cd_account = data.get('CD Account')

    # Connect to the database
    conn = sqlite3.connect('sqlite.db')

    # create the table if it does not exist
    

    cursor = conn.cursor()

    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS loan_data 
        (
            Gender TEXT NULL,
            MaritalStatus TEXT NULL,
            Dependents TEXT NULL,
            Education TEXT NULL,
            Self_Employed TEXT NULL,
            ApplicantIncome REAL NULL,
            CoapplicantIncome REAL NULL,
            LoanAmount REAL NULL,
            Loan_Amount_Term REAL NULL,
            Credit_History REAL NULL,
            Total_Income REAL NULL,
            Age REAL NULL,
            Experience REAL NULL,
            CD_Account REAL NULL
        )
        '''
    )

    conn.commit()


    try:
        # Insert data into the database
        cursor.execute(
            """
            INSERT INTO loan_data (
                Gender, MaritalStatus, Dependents, Education, Self_Employed,
                ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Amount_Term,
                Credit_History, Total_Income, Age, Experience, CD_Account
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, 
            (
                gender, marital_status, dependents, education, self_employed, applicant_income,
                coapplicant_income, loan_amount, loan_amount_term, credit_history, total_income,
                age, experience, cd_account
            )
        )

        conn.commit()

    except Exception as e:
        print(e)
        return jsonify({'message': 'An error occurred while saving data to the database'}), 500
    
    finally:
        conn.close()

    # Encode categorical variables
    data = encode_categorical(data)
    
    # Convert all values to numeric types
    data = {key: float(value) if isinstance(value, int) or isinstance(value, float) else value for key, value in data.items()}
    
    # Convert the dictionary into a DataFrame
    input_df = pd.DataFrame([data])
    
    # Make predictions using the loaded model
    prediction = model.predict(input_df)


    if prediction[0] == 0:
             response_message = 'Sorry, Rejected'


        
    else:
         response_message = 'Congratulations! Approved'

    return jsonify(message=response_message)









@app.route('/', methods=['GET'])
def Hello():
    return jsonify({'message': 'Hello World'})


app.run(host='0.0.0.0', port=5000)
if __name__ == '__main__':
    app.run(debug=True)


