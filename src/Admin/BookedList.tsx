import React from 'react'
import { Table } from 'react-bootstrap'

function BookedList() {
  return (
    <div style={{ border: "10px solid #fff" }}>
      <Table className='table-data' striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>Space id</th>
            <th>Timestamp</th>
            <th>No of hours</th>
            <th>user id</th>
            <th>No. of users</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>121</td>
            <td>9:00 am to 1:00 pm</td>
            <td>4</td>
            <td>10</td>
            <td>3</td>
            <td>180 Rs/hr</td>
          </tr>

          <tr>
            <td>2</td>
            <td>121</td>
            <td>9:00 am to 1:00 pm</td>
            <td>4</td>
            <td>10</td>
            <td>3</td>
            <td>180 Rs/hr</td>
          </tr>

          <tr>
            <td>3</td>
            <td>121</td>
            <td>9:00 am to 1:00 pm</td>
            <td>4</td>
            <td>10</td>
            <td>3</td>
            <td>180 Rs/hr</td>
          </tr>

          <tr>
            <td>4</td>
            <td>121</td>
            <td>9:00 am to 1:00 pm</td>
            <td>4</td>
            <td>10</td>
            <td>3</td>
            <td>180 Rs/hr</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default BookedList