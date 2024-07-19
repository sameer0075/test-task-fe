import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';


import { EnhancedTableHead } from './helper-functions';
import { useTableState } from '../../../CustomHooks/useTable';

/**
 * CustomTable component displays a table with enhanced features.
 */
export default function CustomTable() {
  const {
    order,  // Order for sorting
    orderBy,  // Order by which column
    selected,  // Selected rows
    page,  // Current page number
    dense,  // Dense mode
    rowsPerPage,  // Number of rows per page
    rows,  // All rows
    visibleRows,  // Rows visible on the current page
    emptyRows,  // Empty rows for pagination
    handleRequestSort,  // Sort handler
    handleSelectAllClick,  // Select all handler
    handleClick,  // Click handler
    handleChangePage,  // Page change handler
    handleChangeRowsPerPage,  // Rows per page change handler
    handleChangeDense,  // Dense mode change handler
    isSelected,  // Check if row is selected
  } = useTableState();

  /**
   * Render the CustomTable component
   * @returns JSX element
   */
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: '97%', mb: 2, boxShadow: 'none' }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row: any, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: 'pointer',
                      '&.Mui-selected, &.Mui-selected:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{
                          color: '#E7463F',
                          '&.Mui-checked': {
                            color: '#E7463F',
                          },
                        }}
                      />
                    </TableCell>
                    {
                      Object.keys(row).map((key) => (
                        <TableCell
                          key={key}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align='center'
                        >
                          {row[key]}
                        </TableCell>
                      ))
                    }
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[1, 2]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            '& .MuiTablePagination-actions .MuiIconButton-root': {
              color: '#E7463F',
            },
          }}
        />
      </Paper>
    </Box>
  );
}
