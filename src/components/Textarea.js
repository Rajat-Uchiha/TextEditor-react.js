import React, { useState } from 'react'
import swal from 'sweetalert';
export default function Textarea(props) {
    const [text, setText] = useState("Enter your text") //This is a concept of states and hooks, we will discuss in details about it later on
    //Here text is a variable and Your Entered text is it's default value
    //this text will be given as teh default value of the textarea
    // Now if we what to make changes in this text then we have to use setText function

    // text="newText" //This will not work as we can't change the value of the text just like that

    // setText("Text after using setText method"); //This is the correct way to set text


    // Function to handle uppercase click
    const handeUppcaseClick = () => {
        // setText("This is new value of the textarea changed using setText function")//This will change the text 
        setText(text.toUpperCase())//This will convert the text into upperCase
    }

    const clearTxt = () => {
        handleClearTxt();
    }

    const handleClearTxt = () => {
        // setText("This is new value of the textarea changed using setText function")//This will change the text 
        swal({
            title: "Are you sure?",
            text: "You want to clear!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let newTxt = "";
                    setText(newTxt)
                    swal("Cleared successfully", {
                        icon: "success",
                    });
                } else {
                    swal("Alright!");
                }
            });
    }


    const handeLowcaseClick = () => {
        // setText("This is new value of the textarea changed using setText function")//This will change the text 
        setText(text.toLowerCase())//This will convert the text into LowerCase
    }
    // Function to handle onChange 
    // This function will run when we will try to change anything in which this function has been declared in jsx
    //Like here when we try to change the inner text of the textarea this function is running
    const handleOnChange = (e) => { //Without this function we cannot type into our text area
        //Here this function provides us an event also
        console.log(`On Change`);
        setText(e.target.value);//This will change the value of the textarea or in short we will be able to write in the textarea
    }
    const removeExtraSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim())
    }
    const CopyText = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <>
            <div className={`${props.bodyColor} min-h-screen`}>
                <div className={`flex justify-center py-5`}>
                    <div className="mb-3 w-5/6 ">
                        <label htmlFor="exampleFormControlTextarea1" className={`form-label inline-block mb-2 text-3xl font-semibold ${props.txtColor}`}>{props.tHeading}</label>
                        <textarea
                            className={`form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            bg-gray-200
                            font-normal
                            text-gray-800
                            bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            placeholder:text-gray-800
                            focus:text-gray-800 focus:bg-gray-200 focus:border-green-600 focus:outline-none`}


                            id="myTxt"
                            rows="3"
                            onChange={handleOnChange}
                            value={text}
                            placeholder="Your message"

                        ></textarea>
                    </div>
                </div>


                <div className={`${props.txtColor} flex flex-wrap w-5/6 mx-auto items-center`}>
                    <button disabled={text.length === 0} type="button" onClick={handeUppcaseClick} className=" my-4  mx-1 flex  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">To UpperCase</button>
                    <button disabled={text.length === 0} type="button" onClick={clearTxt} className=" my-4 mx-1  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Clear</button>
                    <button disabled={text.length === 0} type="button" onClick={handeLowcaseClick} className=" my-4  mx-1 flex  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">To LowerCase</button>
                    <button disabled={text.length === 0} type="button" onClick={removeExtraSpace} className=" my-4  mx-1 flex  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Remove Extra space</button>
                    <button disabled={text.length === 0} type="button" onClick={CopyText} className=" my-4  mx-1 flex  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Copy Text</button>

                </div>

                <div className={`${props.txtColor} w-5/6 mx-auto`}>
                    <h1 className='text-3xl font-semibold'>Your Text Summary</h1>
                    <p className='text-lg'>Your text has {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
                    <p className='text-md'>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read </p>
                </div>
                <div className={`${props.txtColor} w-5/6 mx-auto my-5 py-2`} >
                    <h1 className='text-3xl font-semibold'>Preview</h1>
                    <p className={`text-lg`}>{text === "Enter your text" || text === "" ? "Nothing to preview" : text} </p>
                </div>

            </div>
        </>
    )
};
