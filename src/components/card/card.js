import React from 'react';

const Card = (props) => {
    const { name, email } = props;  // you can destructure directly instead of using props
    return (
        <div className='tc bg-light-green dib br3 pa2 ma3 grow bw2 shadow-5'>
            <img alt='John Example' src={`https://robohash.org/${name}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;