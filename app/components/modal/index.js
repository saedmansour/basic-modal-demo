import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames'
import ModalMain from './ModalMain'
import ModalButton from './ModalButton'

class Modal extends React.Component {

    componentDidMount() {
    }

    render() {
        var footerButtons = <div></div>;

        if (this.props.isConfirmation) {
            footerButtons = (
            <div classNames="footerButtons">
              <ModalButton text={'Confirm'} handler={this.props.confirmationConfirmCallback} />
              <ModalButton text={'Cancel'} handler={this.props.confirmationCancelCallback} />
            </div>
          );
        }

        return (
            <div className="modal">
              <ModalMain text={this.props.text} />
              {footerButtons}
            </div>
        )
    }

};

Modal.propTypes = {
    isConfirmation: PropTypes.bool,
    confirmationConfirmCallback: PropTypes.func,
    confirmationCancelCallback: PropTypes.func,
    text: PropTypes.string
};

export default Modal;
