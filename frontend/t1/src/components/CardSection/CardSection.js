import './CardSection.css';

import React from 'react';
import Card from './Card/Card.js';

import courses from '../../data/courses.json';

function CardSection() {
    return (
        <section id="card-section">
            {courses.map((course, index) => {
                return <Card data={course} id={"card-" + (index + 1)} key={index + 1} course={index + 1}/>
            })}
        </section>
    );
}

export default CardSection;