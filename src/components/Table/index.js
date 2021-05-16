import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//mat ui component
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
//styles
import  './index.css';

export default function TableComponent(props) {
    const [data, setData] = useState(props.data);

    console.log(props.data, 'props.data')

    useEffect(() => {
        setData(props.data);
    },[props.data]);

   
    return (
        <Table className={['tablecont', props.tableclass].join(' ')} stickyHeader = {props.stickyHeader} aria-label="simple table">
            <TableHead className='headbgcolor'>
                <TableRow>
                    {props.tablehead ? props.tablehead.map((headname, index) => {
                        return (
                            <TableCell key={index.toString()} align="center">{headname}</TableCell>
                        );
                    }) : ''}
                </TableRow>
            </TableHead>
            <TableBody className='onHover'>
                {data ? data.map((row, rowindex) => {
                    return (
                        <React.Fragment key={rowindex.toString()}>
                            <TableRow key={rowindex.toString()}>
                                {props.tablehead.map((headname, index) => {
                                        return (
                                            <TableCell key={index.toString()} align="center">{row['cell' + (index + 1)] ? row['cell' + (index + 1)] : 'Not Available'}</TableCell>
                                        );
                                })}
                            </TableRow>
                        </React.Fragment>
                    )
                }) : null}
            </TableBody>
        </Table >
    );
}
TableComponent.propTypes = {
    data: PropTypes.array,
    tablehead: PropTypes.array,
    tableclass: PropTypes.string,
    stickyHeader: PropTypes.bool,
};
