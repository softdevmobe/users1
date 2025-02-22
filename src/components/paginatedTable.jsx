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


export default function PaginatedTable({ rows, columns, onPageChange, onRowsPerPageChange, count }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log("rows : ", rows);
  const handlePageChange = (event, newPage) => {

    setPage(newPage);
    if (onPageChange) {
      onPageChange(newPage); // Call the parent's callback
    }
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset to the first page when rows per page changes
    if (onRowsPerPageChange) {
      onRowsPerPageChange(newRowsPerPage); // Call the parent's callback
    }
  };

  const displayedRows = rows;
  //   rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <Avatar
                  key={column.id}
                    margin="normal"
                    alt="Remy Sharp"
                    src={row[column.id]}
                    sx={{ width: 56, height: 56, m: 1.5 }}
                  />
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
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange} // Use the modified handler
        onRowsPerPageChange={handleRowsPerPageChange} // Use the modified handler
      />
    </TableContainer>
  );
}
