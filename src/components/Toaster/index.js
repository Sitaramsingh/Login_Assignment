import { toast } from 'react-toastify';
import './index.css';

let toaster = {};

toaster.error = (...args) => {
    toast.error(args[0], {
        className: 'errorbackground toasterContainer',
    });
};


export default toaster;

