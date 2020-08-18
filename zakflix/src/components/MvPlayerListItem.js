import React, { Component } from 'react';

class MvPlayerListItem extends Component {
    render(){
        return (
            <>
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">{this.props.number}</div>
                    <div className="mvPlayerListItem--title">{this.props.title}</div>
                    <div className="mvPlayerListItem--time">{this.props.duration}</div>
                </div>
                <div className="mvPlayerListItem--divider"/>
            </>
        )
    }
}

export { MvPlayerListItem };