import { Table } from "reactstrap";
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Margin } from "@mui/icons-material";
const Contacts = () => {

    const initState = [];
    const [state, setState] = useState(initState);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com`;
        axios
            .get(`${url}/users`)
            .then((response) => setState(response.data));
    }, []);

    const handleEdit = (event) => {

        setIsEdit(!isEdit);
        setId(event.id);
        setName(event.name);
        setEmail(event.email);
        setUsername(event.username);
        setPhone(event.phone);
    };

    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        const url = `https://jsonplaceholder.typicode.com`;

        axios
            .put(`${url}/users/${id}`, {
                name: evt.target.name.value,
                email: evt.target.email.value,
                username: evt.target.username.value,
                phone: evt.target.phone.value,
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


    const handleDelte = (id) => {
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

    return (
        <div>{isEdit ? (<div className='container mt-5 pt-5'>
            <div className='row justify-content-center' dir="rtl">
                <div className='col-6'>
                    <form onSubmit={handleOnEditSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">نام</label>
                            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">نام کاربری</label>
                            <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">ایمیل</label>
                            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">شماره موبایل</label>
                            <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone"></input>
                        </div>
                        <button type="submit" className="btn btn-primary d-flex">ذخیره</button>
                    </form>
                </div>
            </div>
        </div>) : (<Table className="mt-5" dir="rtl" responsive>
            <thead>
                <tr>
                    <th>
                        نام
                    </th>
                    <th>
                        نام کاربری
                    </th>
                    <th>
                        ایمیل
                    </th>
                    <th>
                        شماره موبایل
                    </th>
                    <th>
                        عملیات
                    </th>
                </tr>
            </thead>
            <tbody>
                {state.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button type="button" onClick={() => handleDelte(user.id)}>حذف</button>
                            <button type="submit" onClick={() => handleEdit(user)}>ویرایش</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>)}</div>

    )
}
export default Contacts;