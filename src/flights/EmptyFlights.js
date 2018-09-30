import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Table} from 'react-bootstrap';

class EmptyFlights extends Component {
  render() {
    return (
        <div>
        <Table>
          <tr>     
                <td>No flights yet</td>
            </tr>
        </Table>
      </div>
    );
  }
}

export default EmptyFlights;