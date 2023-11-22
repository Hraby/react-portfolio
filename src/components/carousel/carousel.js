// TODO - In progress
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './_carousel.css';

const slides = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg'
];


export default function Carousel(){
    var transition = 'scale';
    const [counter, setCounter] = useState(0);

    const prevSlide = () => {
        const prevSlide = counter - 1 < 0 ? slides.length - 1 : counter - 1;
        setCounter(prevSlide);
    };

    const nextSlide = () => {
        const nextSlide = counter + 1 < slides.length ? counter + 1 : 0;
        setCounter(nextSlide);
    };

    return (
        <div className="carousel">
            <div className="carousel__prev" onClick={prevSlide}>
                ◀︎
            </div>
            <div className="carousel__next" onClick={nextSlide}>
                ▶︎
            </div>
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames={transition}
            >
                <div style={{ backgroundImage: `url('${slides[counter]}')` }} key={counter} className="carousel__slide"></div>
            </CSSTransition>
        </div>
    );
};