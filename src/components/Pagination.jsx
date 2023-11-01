import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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

function rankFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    < div
      style={{
        textAlign: "center",
        cursor: "pointer",
        lineHeight: "normal",
        display:"flex"
      }}>

      <Button type="submit" color="success" >ویرایش</Button>
      <Button type="button" color="danger" >حذف</Button>
    </div>
  );
}

const TablePagination = ({ users }) => {
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
        data={users}
        columns={columns}
        pagination={paginationFactory(options)}
        bordered={true}
        tabIndexCell
      />
    </div>
  );

}
export default TablePagination;