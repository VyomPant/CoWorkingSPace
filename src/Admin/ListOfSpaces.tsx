import React from 'react'
import { Table } from 'react-bootstrap'
import './SideBar.css'

function ListOfSpaces() {
  return (
    <div >
      <Table className='table-data' striped bordered hover variant="dark"
        style={{
          border: "10px solid red",
          textAlign: "center",
          alignItems: "center",
          marginTop: "10%"
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Space Name</th>
            <th>Space Type</th>
            <th>Space Price</th>
            <th>Address</th>
            <th>Start-time</th>
            <th>End-time</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Hotseat</td>
            <td>60 Rs/hr</td>
            <td>delhi</td>
            <td>9:00 a.m.</td>
            <td>9:00 p.m.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Large desk</td>
            <td>60 Rs/hr</td>
            <td>delhi</td>
            <td>9:00 a.m.</td>
            <td>9:00 p.m.</td>
          </tr>
          <tr>
            <td>3</td>
            <td >Larry the Bird</td>
            <td >Cabin</td>
            <td>60 Rs/hr</td>
            <td>delhi</td>
            <td>9:00 a.m.</td>
            <td>9:00 p.m.</td>
          </tr>
          <tr>
            <td>4</td>
            <td >Larry the Bird</td>
            <td >Cabin</td>
            <td>60 Rs/hr</td>
            <td>delhi</td>
            <td>9:00 a.m.</td>
            <td>9:00 p.m.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ListOfSpaces