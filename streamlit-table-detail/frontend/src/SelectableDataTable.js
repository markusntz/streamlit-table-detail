import React, { useState, useEffect } from "react"
import { 
  SelectionState, 
  IntegratedSelection, 
  RowDetailState,
} from "@devexpress/dx-react-grid"
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui"
import {
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"


const RowDetail = ({row}) => (
    <div>
      here are the details:  
      {' '}
      { row.details }
    </div>
  );

const SelectableDataTable = props => {
  useEffect(() => {
    Streamlit.setFrameHeight(1000)
  })

  const handleSelectionChange = (value) => {
    setSelection(value)
    Streamlit.setComponentValue(value)
  }

  const [selection, setSelection] = useState([])

  const [columns] = useState([
    { name: 'name', title: 'Name'},
    { name: 'favorite_color', title: 'Favorite Color' },
    { name: 'details', title: 'Details' }
    ])

  const [ rows ] = useState( props.args.data )

  return (
    <Grid 
      rows={rows} 
      columns={columns}
      >
      <SelectionState
          selection={selection}
          onSelectionChange={handleSelectionChange}
          />
      <RowDetailState
          defaultExpandedRowIds={[0]}
        />
      <IntegratedSelection />
      <Table />
      <TableHeaderRow />
      <TableRowDetail
          contentComponent={RowDetail}
        />
      <TableSelection showSelectAll />
    </Grid>
  )
}

export default withStreamlitConnection(SelectableDataTable)
