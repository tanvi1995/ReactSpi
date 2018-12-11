import React from 'react';
import { CSSTransition } from "react-transition-group";

class About extends React.Component {
    
    render() { 
        return (
            <CSSTransition 
            in={true}    
            appear={true}
            timeout={1000}
            classNames="fade"
            enter={false}
        >
            <div>
                I am at about page.
            </div>
            </CSSTransition>
          );
    }
}
 
export default About;