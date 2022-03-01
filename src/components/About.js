import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`${props.txtColor} ${props.bodyColor} min-h-screen body-font`}>
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${props.txtColor}`}>TextEditor</h1>
                        <p className=" font-semibold leading-relaxed">TextEditor is an online text editor where you can change your text into upper case or in lower case.</p>
                        <div className="flex-col w-full justify-center items-center my-2">
                            <div className="relative mx-auto lg:w-full xl:w-2/3 w-3/4 md:w-full my-3">
                                <p className="my-1 leading-relaxed">Let's remain in touch!</p>
                                <label htmlFor="hero-field" className={`leading-7 text-sm ${props.txtColor}`}>Your email please..</label>
                                <input type="email" id="hero-field" name="hero-field" className={`w-full bg-opacity-50 rounded focus:ring-2 focus:ring-gray-200 focus:bg-gray-200 border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                            </div>
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
