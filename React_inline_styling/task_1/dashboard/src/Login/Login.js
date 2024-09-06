import React from 'react';
import { StyleSheet, css } from 'aphrodite';

//Import Aphrodite style
const styles = StyleSheet.create({
    app: {
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    login: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'white',
        padding: '10px',
        maxWidth: '600px',
        margin: '0 auto',  // Center the login box
    },
    label: {
        fontSize: '18px',
    },
    input: {
        padding: '2px',
        border: '1px solid lightgrey',
        borderRadius: '2px',
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        borderRadius: '5px',
        padding: '2px 8px',
        cursor: 'pointer',
    },
});

function Login() {
    return (
        <div className={css(styles.login)}>
            <label htmlFor="email" className={css(styles.label)}>Email:</label>
            <input type="email" id="email" name="email" className={css(styles.input)} />
            <br />
            <label htmlFor="password" className={css(styles.label)}>Password:</label>
            <input type="password" id="password" name="password" className={css(styles.input)} />
            <br />
            <button type="button" className={css(styles.button)}>OK</button>
        </div>
    );
}

export default Login;