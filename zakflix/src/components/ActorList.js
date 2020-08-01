import React from 'react';

import {Actor} from './index';

const ActorList = props => {

    renderActor = () =>{
        return props.Actors.map((actor,i) =>{
            const imgSrc = './images/Fast_small.jpg';
            return (
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                />
            )
        })
    }
    return (
        <div className="actorList">
            <h3 className="actorList--title">ACTEURS</h3>
    <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}
export {ActorList};