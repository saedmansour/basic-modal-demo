import React from 'react';
import PropTypes from 'prop-types';

class ModalMain extends React.Component {

    componentDidMount() {
    }

    render() {
        var mainText = this.props.text;

        return (
          <div>
            {mainText}
          </div>
        )
    }

};

ModalMain.propTypes = {
    text: PropTypes.string
};

export default ModalMain;
