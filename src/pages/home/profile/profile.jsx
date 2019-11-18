// import React, { useState } from 'react';
// import { Container, Button, Alert } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';

// import './styles.css';

// function Example() {
//     const [showButton, setShowButton] = useState(true);
//     const [showMessage, setShowMessage] = useState(false);
//     return (
//         <Container style={{ paddingTop: '2rem' }}>
//             {showButton && (
//                 <Button
//                     onClick={() => setShowMessage(true)}
//                     size="lg"
//                 >
//                     Show Message
//         </Button>
//             )}
//             <CSSTransition
//                 in={showMessage}
//                 timeout={300}
//                 classNames="alert"
//                 unmountOnExit
//                 onEnter={() => setShowButton(false)}
//                 onExited={() => setShowButton(true)}
//             >
//                 <Alert
//                     variant="primary"
//                     dismissible
//                     onClose={() => setShowMessage(false)}
//                 >
//                     <Alert.Heading>
//                         Animated alert message
//           </Alert.Heading>
//                     <p>
//                         This alert message is being transitioned in and
//                         out of the DOM.
//           </p>
//                     <Button onClick={() => setShowMessage(false)}>
//                         Close
//           </Button>
//                 </Alert>
//             </CSSTransition>
//         </Container>
//     );
// }

// export default Example


import React from "react"
import { CSSTransition } from 'react-transition-group';
import './styles.css';

export default class Example extends React.Component {
    state = {
        show: true
    }
    handleClick() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }
    render() {
        return (

            <div>
                <CSSTransition
                    in={this.state.show}
                    classNames="alert"
                    timeout={3000}
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleClick.bind(this)}>show or hidden</button>
            </div>
        )

    }
}
