import styled from 'styled-components';

export const Autocomplete = styled.div`
    padding: 1rem;

    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid ${props => props.theme.borderColor};
        font-size: 1.6rem;
        font-weight: 200;

        :focus {
            border-bottom: 1px solid ${props => props.theme.mainColor};
            outline: none;
        }
    }

    div {
        font-size: 1.6rem;
        font-weight: 200;
    }

    .dropdown-container {
        display: flex;
        flex-direction: column;
        box-shadow: 0px 2px 4px 1px ${props => props.theme.borderColor};

        .option {
            padding: .5rem;
            text-align: left;

            :hover {
                background-color: ${props => props.theme.highlight};
                color: white;
            }
        }
    }
    
`;