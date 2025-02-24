import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Avatar from "@mui/material/Avatar";


export default function PaginatedTable({ rows, columns, onPageChange, onPageSizeChange, count }) {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    if (onPageChange) {
      onPageChange(newPage); // Call the parent's callback
    }
  };

  const handlePageSizeChange= (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setPage(1); // Reset to the first page when rows per page changes
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize); // Call the parent's callback
    }
  };

  const displayedRows = rows;
  //   rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRows.map((row) => (
            <TableRow key={row.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {columns.map((column) =>
                column.id === "imagePath" ? (
                  <TableCell key={column.id}>
                    {" "}
                    <Avatar
                      margin="normal"
                      alt="Remy Sharp"
                      src={row[column.id]}
                      sx={{ width: 56, height: 56, m: 1.5 }}
                    />
                  </TableCell>
                ) : (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        // count={rows.length}
        count={count}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={handlePageChange} // Use the modified handler
        onPageSizeChange={handlePageSizeChange} // Use the modified handler
        labelDisplayedRows={({ from, to, count }) => {
          return `نمایش ${from} تا ${to} از ${count}`;
        }}
        labelRowsPerPage="تعداد سطر در هر صفحه"
      />
    </TableContainer>
    </Paper>
  );
}
