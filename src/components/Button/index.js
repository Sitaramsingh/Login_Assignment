import React from 'react';
import './index.css';
import PropTypes from 'prop-types';


function button(props) {
    return (
        <button className={['buttonStyle', props.className].join(' ')}
            onClick={props.onClick}
            disabled={props.disable}
        >{props.children}</button>
    );
}

button.propTypes = {
    btnType: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    children: PropTypes.any
};

export default button;