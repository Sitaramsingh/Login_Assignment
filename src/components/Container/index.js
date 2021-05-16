import React from 'react';
import Proptypes from 'prop-types';

export default function Container(props) {
    return (
        <div className={ props.style == 'large' ? ['offset-md-1 col-md-10 col-sm-12', props.className].join(' '): ["offset-md-2 col-md-8 col-sm-12", props.className].join(' ')}>
            <div className={["col-md-12 col-sm-12", props.innerClassName].join(' ')}>
                {props.children}
            </div>
        </div>
    );
};

Container.propsType = {
    className:  Proptypes.string,
    innerClassName:  Proptypes.string,
    style: Proptypes.string,
};
