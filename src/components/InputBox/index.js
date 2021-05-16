import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(0),
    },
    textField: {
        width: "100%",
    },
}));

function InputType(props) {
    const classes = useStyles();
    if (props.inputstyle == "text") {
        return (
            <TextField
            id={props.id}
            error={props.error}
            style={props.style}
            onChange = {props.onChange}
            variant = {props.variant}
            name = {props.name}
            value={props.value}
            label = {props.label}
            type = {props.type}
            helperText = {props.helpertext}
            onKeyPress={props.onKeyPress}
            InputProps = {props.InputProps}
            InputLabelProps = {props.InputLabelProps}
            defaultValue = {props.defaultValue}
            value = {props.value}
            FormHelperTextProps = {props.FormHelperTextProps}
            classes = {props.classes}
            inputProps = {props.inputProps}
            multiline = {props.multiline}
            placeholder = {props.placeholder}
          />
        );
    } else if (props.inputstyle == "password") {
        return (
            <TextField
                id={props.id}
                label={props.label}
                style={props.style}
                className={clsx(classes.margin, classes.textField)}
                type={props.showPassword ? "text" : "password"}
                autoComplete="current-password"
                name={props.name}
                error={props.error}
                onChange={props.onChange}
                variant="outlined"
                helperText={props.helpertext}
                onKeyPress={props.onKeyPress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={props.handleClickShowPassword}
                            >
                                {props.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
           
        );
    } 
    else {
        return;
    }
}

InputType.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    type: PropTypes.string,
    helpertext: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    inputstyle: PropTypes.string,
    showPassword: PropTypes.bool,
    handleClickShowPassword: PropTypes.func,
    rows:PropTypes.bool,
    handleClickShowPassword:PropTypes.func,
    name: PropTypes.string,
    onKeyPress: PropTypes.func,
    InputProps: PropTypes.object,
    InputLabelProps: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    FormHelperTextProps: PropTypes.object,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
};

export default InputType;