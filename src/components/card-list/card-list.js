import React from 'react';
import Card from '../card/card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map(robot => {
        return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                username={robot.username}
                email={robot.email}
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;