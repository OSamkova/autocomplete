import React, { useState, useEffect, useRef } from 'react';
import * as S from '../_css/elements';
import * as API from '../_api';

export const Autocomplete = () => {
    const [ options, setOptions ] = useState([]);

    const getOptions = (value) => {
        try {
            API.fetchDataMock(value)
                .catch(e => console.error(`Promise error - ${e}`))
                .then(data => setOptions(data));
        } catch(e) {
            console.log(e);
        } 
    }

    return (
        <S.Autocomplete>
            <Input options={options} callback={getOptions}/>
        </S.Autocomplete>
    )
}

export const Input = ({ options, callback }) => {
    const [ value, setValue ] = useState('');
    const [ isActive, setIsActive ] = useState(false); 
    const containerEl = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick, false);
        }
    }, []);

    useEffect(() => {
        if(isActive) {
            if(value.length > 0) {
                callback(value);
            }
        }
    }, [value]);

    function handleOutsideClick(e) {
        !containerEl.current.contains(e.target) && setIsActive(false);
    }

    const handleSelectOption = (val) => {
        setValue(val);
        setIsActive(false);
    }

    return (
        <div ref={containerEl}>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsActive(true)}
            />
            {
                isActive && options.length > 0 && <div className="dropdown-container">
                    {
                        options.map(option => {
                            return (
                                <Option 
                                    key={option} 
                                    option={option} 
                                    handleSelectOption={handleSelectOption}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

const Option = ({ option, handleSelectOption }) => {
    return (
        <div className="option" onClick={() => handleSelectOption(option)}>{option}</div>
    )
}