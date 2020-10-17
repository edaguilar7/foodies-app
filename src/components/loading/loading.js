import React from 'react';
import './loading.css';
import { Spinner } from 'react-bootstrap';

const Loading = ({ children, isLoading }) =>  {

    return (
        <>
            <div className="loading">
                {
                    isLoading &&
                    (
                        <Spinner 
                            className="loading__spinner"
                            animation="border" 
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    )
                }
            </div>
            {children}
        </>
    )
}

export default Loading
