import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {employeeListAction} from '../../actions';
import Container from '../../components/Container';
import Table from '../../components/Table';
import Header from '../../components/Header';
import {actionTypes, labelName } from '../../constant';
// import {actionTypes} from '../constant';
import './index.css';

const createData = (cell1, cell2, cell3, cell4, cell5, cell6) => {
    return {cell1, cell2, cell3, cell4, cell5, cell6};
};

const tablehead = ['id', 'name', 'age', 'gender', 'email', 'phoneNo'];

export default function Index() {
    const [employeeListState, setEmployeeListState] = useState(null)

    const dispatch = useDispatch();

    const employeeListItems = useSelector(state => state.employeeListData);

    useEffect(() => {
        dispatch(employeeListAction());
    }, []);

    useEffect(() => {
        const {employeeList} = employeeListItems;
        let tableData = null;
        if(employeeList){
             tableData = employeeList.map((data, index) => {
                return createData(data.id, data.name, data.age, data.gender, data.email, data.phoneNo);
            });
            setEmployeeListState(tableData)
        }
       
    }, [employeeListItems.employeeList]);

    return (
        <div>
            <Header/>
            <Container>
                <div className='dashboardStyle'>
                    <h1>{labelName.EmployeeList}</h1>
                    {employeeListState && <Table data={employeeListState} tablehead={tablehead}/> }
                </div>
            </Container>
        </div>
    );
}
