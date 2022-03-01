//Always start names of the components with capital letter like here Navbar.js


import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// This is react function based component
//Here we are using props.
export default function Navbar(props) {
    return (
        <>
            <header className={` ${props.bgMode} body-font`}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className={`ml-3 text-xl ${props.txtColor}`}>{props.title}</span>
                    </p>
                    <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center`}>
                        <svg className={`h-6 w-6 mx-2 ${props.svgColor}  transform hover:scale-125 hover:transition ease-linear duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z" /></svg>
                        <Link className={` text-lg  mr-5 ${props.txtColor} hover:cursor-pointer hover:text-green-600`} to="/">{props.firstLink}</Link>

                        <svg className={`h-6 w-6 mx-2 ${props.svgColor} transform hover:scale-125 hover:transition ease-linear duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        <Link className={` text-lg  mr-5 ${props.txtColor} hover:cursor-pointer hover:text-green-600`} to="/About">{props.secondLink}</Link>

                    </nav>
                    <button type="button" onClick={props.toggleMode} className={`my-2 sm:my-2 md:my-2 lg:my-0 xl:my-0  mx-auto flex px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out`}>Enable {props.bgMode === "bg-gray-300" ? "Dark mode" : "Light mode"}</button>
                </div>
            </header >
        </>
    );
}

// Here we are basically validating that the types of props which we are import are of the desired type
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //This show that it is required
    firstLink: PropTypes.string.isRequired, //This show that it is required
    secondLink: PropTypes.string.isRequired, //This show that it is required
    thirdLink: PropTypes.string.isRequired //This show that it is required
}

// Here we are setting the default values of the props let us suppose if we forgets to send the props then these  values will handle
Navbar.defaultProps = {
    title: "Website Heading",
    firstLink: "Website link1",
    secondLink: "Website link2",
    thirdLink: "Website link3"
};