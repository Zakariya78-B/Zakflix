import React , { Component } from 'react';
import {Spinner, HeaderDetails, ActorList } from '../components';


class Details extends Component {
    state ={
        loading: true,
        actors:[
            {
                name: "Brad pitt",
            },
            {
                name: "the Rock",
            },
            {
                name: "Denzel Washinton",
            },
            {
                name: "Will Smith",
            }
        ],
        mTitle:"Batman",
        mDesc:"Voici la description du film Batman",
        imgSrc:'./images/Fast_large.jpg',
        runtime:"2h30",
        revenue:"26 500 035€",
        status:" Released",
        vote:""
    }
    render(){
        const{loading, mTitle,mDesc,imgSrc,runtime,revenue,status,vote,actors} = this.state;

        return (
            <div className="app">
                {this.props.loading ?
                (
                    <Spinner />
                ):
                (
                    <>
                        <HeaderDetails
                            mTitle={mTitle}
                            mDesc={mDesc}
                            imgSrc={imgSrc}
                            runtime={runtime}
                            revenue={revenue}
                            status={status}
                            vote={vote}

                        />
                        <ActorList actors={actors} />
                    </>
                )}
            </div>
        )
    }
}
export {Details};