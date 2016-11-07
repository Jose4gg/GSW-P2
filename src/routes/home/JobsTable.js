import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
    from 'material-ui/Table';
import {RaisedButton} from 'material-ui';
import React from 'react';
import history from '../../core/history'
import { observer } from 'mobx-react'
import {trans} from '../../Stores/Dictionary'

const state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
};
import Link from '../../components/Link'
const _Table = observer(props => (
    <div>
        <Table
          height={state.height}
          fixedHeader={state.fixedHeader}
          fixedFooter={state.fixedFooter}
          selectable={state.selectable}
          multiSelectable={state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={state.showCheckboxes}
            adjustForCheckbox={state.showCheckboxes}
            enableSelectAll={state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn >{trans.key.LAYOUT.LOCATION()}</TableHeaderColumn>
              <TableHeaderColumn >{trans.key.LAYOUT.POSITION()}</TableHeaderColumn>
              <TableHeaderColumn >{trans.key.LAYOUT.COMPANY()}</TableHeaderColumn>
              <TableHeaderColumn >{trans.key.LAYOUT.OPTIONS()}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={state.showCheckboxes}
            deselectOnClickaway={state.deselectOnClickaway}
            showRowHover={state.showRowHover}
            stripedRows={state.stripedRows}
          >
            {props.jobs.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.Location}</TableRowColumn>
                <TableRowColumn>{row.Job}</TableRowColumn>
                <TableRowColumn>{row.company}</TableRowColumn>
                <TableRowColumn>
                    <Link to={"/Job/View/" + row.id}>
                        <RaisedButton primary={true} label={trans.key.LAYOUT.SEEMORE()}/>
                    </Link>
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
))

export default _Table;

// <TableRow>
//               <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
//                 Super Footer
//               </TableRowColumn>
//             </TableRow>