import React from 'react';
import { render } from '@testing-library/react';

class ShowHide2 extends React.Component{
    constructor(){
        super();
        this.state={
            name: "test"
        };
    }
    render() {
        return (
            <div>
                <p> showing nr 2</ p >
            </div>
          )    
        };
    
      }
export default ShowHide2;