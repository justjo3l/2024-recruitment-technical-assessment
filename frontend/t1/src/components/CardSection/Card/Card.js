import './Card.css';

import React from 'react';

import TermSection from './TermSection/TermSection.js';

import emptyStarIcon from '../../../assets/empty-star.svg';
import filledStarIcon from '../../../assets/filled-star.svg';

function Card(params) {

    const course = params.course;
    const data = params.data;

    return (
        <div className='card'>
            <header className='card-title'>
                <div className='course-name'>{data.course_prefix + data.course_code}</div>
                <div className='course-stats'>
                    <div className='course-rating'>
                        <div>
                            {[1,2,3,4,5].map((val) => {
                            return <img key={val} src={val <= Math.floor(data.average_stars) ? filledStarIcon : emptyStarIcon} alt='star'/>
                        })}
                        </div>
                    </div>
                    <p className='course-reviews'>{data.total_reviews} reviews</p>
                </div>
            </header>
            <section className='card-info'>{data.course_title}</section>
            <TermSection terms={data.offered_terms} course={course}/>
        </div>
    );
}

export default Card;