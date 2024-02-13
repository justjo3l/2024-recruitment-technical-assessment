import './Term.css';

import React from 'react';

function Term(params) {

    const data = params.data;

    return (
        <div className='term'>
            {data}
        </div>
    );
}

export default Term;