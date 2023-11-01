import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Margin } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axiosRes from './../services/interceptor4008500';
import example from '../components/Pagination';
import TablePagination from "../components/Pagination";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Dropdown from 'react-bootstrap/Dropdown'




const Contacts = (args) => {

    <example />
    const initState = [];
    const [state, setState] = useState(initState);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com`;
        axios
            .get(`${url}/users`)
            .then(function (response) {
                setState(response.data)
            })
    }, []);

    const handleEdit = (event) => {
        setIsEdit(!isEdit);
        setId(event.id);
        setName(event.name);
        setEmail(event.email);
        setUsername(event.username);
        setPhone(event.phone);
        navigate(`/layout/contacts/${event.id}`);
    };


    const handleOnEditSubmit = (eventName, eventEmail, eventUsername, eventPhone) => {

        const url = `https://jsonplaceholder.typicode.com`;
        axios
            .put(`${url}/users/${id}`, {
                name: eventName,
                email: eventEmail,
                username: eventUsername,
                phone: eventPhone,
            })
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setUsername(response.data.username);
                setPhone(response.data.phone);
                alert("ویرایش با موفقیت انجام شد")
            });

        setIsEdit(!isEdit);
    };


    const handleDelete = (id) => {
        setIsEdit(!isEdit);

        const url = `https://jsonplaceholder.typicode.com`;

        axios
            .delete(`${url}/users/${id}`, {
                "id": id
            })
            .then((response) => {
                alert("حذف با موفقیت انجام شد")
            });

        setIsEdit(isEdit);
    };

    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const toggleDelete = () => setModalDelete(!modalDelete);
    const toggleEdit = () => setModalEdit(!modalEdit);
    // set Table column names
    const columns = [{
        dataField: 'name',
        text: 'نام'
    }, {
        dataField: 'username',
        text: ' نام کاربری'
    }, {
        dataField: 'email',
        text: ' ایمیل'
    }, {
        dataField: 'phone',
        text: ' شماره موبایل'
    },
    {
        dataField: "action",
        text: "عملیات",
        sort: false,
        formatter: rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" }
    },];

    const editbutton = (row) => {
        return (
            <Button type="submit" color="success" onClick={() => handleEdit(row)}>ویرایش</Button>

        );
    }

    const deletebutton = (id) => {
        return (
            <Button type="button" color="danger" onClick={toggleDelete} >حذف</Button>


        );
    }


    function rankFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            < div
                style={{
                    textAlign: "center",
                    cursor: "pointer",
                    lineHeight: "normal",
                    display: "flex"
                }}>

                <editbutton row={row} />
                <deletebutton id={row.id} />

            </div>
        );
    }



    const sizePerPageRenderer = ({
        currSizePerPage,
        onSizePerPageChange
    }) => (

        <Dropdown className="d-inline">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {currSizePerPage}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    key={'5'}
                    onClick={() => onSizePerPageChange(5)}
                    className={`btn ${currSizePerPage === `${5}` ? 'btn-secondary' : 'btn-warning'}`}
                    href="javascript:void(0)"> {5}</Dropdown.Item>
                <Dropdown.Item
                    key={'10'}
                    onClick={() => onSizePerPageChange(10)}
                    className={`btn ${currSizePerPage === `${10}` ? 'btn-secondary' : 'btn-warning'}`}
                    href="javascript:void(0)"> {10}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
    const options = {
        sizePerPageRenderer,
        showTotal: false,
    };
    
    return (
       
                    <div>
                        <h2>TablePagination Demo</h2>
                        {/* Render table */}
                        <BootstrapTable
                            classes="small table-sm"
                            bootstrap4
                            keyField='id'
                            data={state}
                            columns={columns}
                            pagination={paginationFactory(options)}
                            bordered={true}
                            tabIndexCell
                        />
                    </div>
               
    );
}
export default Contacts;