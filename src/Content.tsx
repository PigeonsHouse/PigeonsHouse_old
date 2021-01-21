import React from 'react';
import './Content.css';
import type { ContentProps } from './ContentProps';

class Content extends React.Component<ContentProps, {}>{
    render(){
        return(
            <div className='content'>
                <h1>{ this.props.classification.title }</h1>
                <div className='contentText'>
                    { this.props.classification.contentText }
                </div>
            </div>
        )
    }
}

export default Content;