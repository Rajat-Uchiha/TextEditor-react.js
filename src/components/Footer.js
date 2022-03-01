import React from 'react'

export default function footer(props) {
    return (
        <>
            <footer className={`${props.bgMode} body-font flex justify-center`} >
                <div className={`px-5 py-5 mx-auto flex justify-center items-center sm:flex-row flex-col`}>
                    <p className={` ${props.txtColor} `}>&copy; 2022 TextEditor.com</p>
                </div>
            </footer>
        </>
    )
}
