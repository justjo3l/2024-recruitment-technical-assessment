import './TermSection.css';

import React from 'react';

import Term from './Term/Term.js';

function TermSection(params) {

    const course = params.course
    const terms = params.terms

    return (
        <div className='term-section'>
            {terms.map((term, index) => {
                return <Term key={course + "-" + index} data={term} />
            })}
        </div>
    );
}

export default TermSection;