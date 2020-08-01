import React , { Component } from 'react';
import {Spinner, HeaderDetails, ActorList } from '../components';

const actors =[
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
]
class Details extends Component {
    render(){
        return (
            <div className="app">
                {this.props.loading ?
                (
                    <Spinner />
                ):
                (
                    <>
                        <HeaderDetails
                            mTitle={"Batman"}
                            mDesc={"Voici la description du film Batman"}
                            imgSrc={'./images/Fast_large.jpg'}
                            runtime={"2h30"}
                            revenue={"26 500 035€"}
                            status={" Released"}
                            vote={""}

                        />
                        <ActorList actors={actors} />
                    </>
                )}
            </div>
        )
    }
}
export {Details};