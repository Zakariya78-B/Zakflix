import React from 'react';

import {Actor} from './index';
import '../css/ActorList.css';

const ActorList = props => {

    const renderActor = () =>{
        console.log(props.actors)
        return props.actors.map((actor, i) =>{
            const imgSrc = './images/Fast_small.jpg';
            return (
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                    hover={false}
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