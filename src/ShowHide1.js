import React from 'react';

class ShowHide1 extends React.Component{
    constructor(){
        super();
        this.state={
            name: "test"
        };
    }
    render() {
        return (
            <div >
                <p> showing nr 1</ p >
            </div>
          )    
        };
    
      }
export default ShowHide1;