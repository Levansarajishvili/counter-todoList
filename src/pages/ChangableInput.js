import React, { useState } from 'react'


export default function ChangableInput() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='useuse'>
            <input type='text' onChange={handleInputChange} />
            {inputValue}
        </div>
    )
}
