import React from 'react'

function Footer() {
    return (
        <footer style={footerStyle} >
            <h1>FOOTER</h1>
        </footer>
    )
}
const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    width: '100%',
    textAlign: 'center',
    gridRowStart: '3',
    gridRowEnd: '3',
}


export default (Footer)