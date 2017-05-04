import React from 'react';

import Modal from 'react-basic-modal'
import modalStyles from './modal/modal.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={modalStyles.modal}>
                  <Modal isConfirmation={true} text={'This is an example test.'} />
                </div>
            </div>
        )
    }
}

export default Main;
