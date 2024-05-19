import React from 'react';
import styles from './cont3.module .css';
class FormComponent3 extends React.Component {
    render() {
        return (
            <div id='FormComponent3'>
                <p>
                    Selfie photo
                    <br />
                    Your personal photo. The photo must be done by yourself.
                    The photo must show your face and your both shoulders.
                    <br />
                    ID Card
                    <br />
                    Valid Government ID card must be shown.
                    Front and back side. Original ID card. Full photo.
                    All parts of the ID card must show on the photo.
                </p>
                <form className={styles.fileUploadForm} id="fileUploadForm">
                    <label htmlFor="fileInput">Choose a file:</label>
                    <input type="file" id="fileInput" name="fileInput" accept=".txt, .pdf, .docx, .jpg" />
                </form>
                <div className={styles.buttonContainer}>
                    <button className={styles.beforeButton}>previous</button>
                    <button className={styles.sendButton}>Send</button>
                </div>
            </div>
        );
    }
}

export default FormComponent3;
