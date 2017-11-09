import React, {Component} from 'react';
import './Page1.css';
import Button from 'antd/lib/button';
import image from './images/360.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
            <Button type="primary">Button</Button>
                this is Page2223332221~
                <img src={image}/>
            </div>
        )
    }
}