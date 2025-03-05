import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import PaginatedTable from "./paginatedTable";
import UserEdit from "./userEdit";
import UserDelete from "./userDelete";
import UserCreate from "./userCreate";
import UserEditPassword from "./userChangePassword";
import * as yup from "yup";

const User = () => {
  const [mode, setMode] = useState("add");
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({});
  const [selectedRow, setSelectedRow] = useState({});

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(10);

  const columns = [
    { id: "userName", label: "یوزر" },
    { id: "nameFamily", label: "نام" },
    { id: "roleCode", label: "roleCode" },
    { id: "imagePath", label: "imagePath" },
    { id: "action", label: "عملیات", actions: ["edit", "delete", "editPass"] },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mode === "add") {
          const response = await axios.post("/api/users/getUsers", { page, pageSize });
          if (response.status !== 200) {
            const errorData = await response.json();
            setErrors(errorData.message || errorData.statusText);
            return;
          }
          const dataUser = await response.data.user;
          setRows(dataUser.recordset);
          setCount(dataUser.output.count);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, pageSize, mode]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPage(0);
    setPageSize(newPageSize);
  };

  const onAction = (action, row) => {
    if (row)
      setSelectedRow({
        userName: row.userName,
        nameFamily: row.nameFamily,
        imagePath: row.imagePath,
      });
    else
      setSelectedRow({
        userName: "",
        nameFamily: "",
        imagePath: "",
      });
    setMode(action);
  };

  let formComponent;
  if (mode === "add") {
    formComponent = <UserCreate selectedRow={selectedRow} setMode={setMode} />;
  } else if (mode === "delete") {
    formComponent = <UserDelete selectedRow={selectedRow} setMode={setMode} />;
  } else if (mode === "edit") {
    formComponent = <UserEdit selectedRow={selectedRow} setMode={setMode} />;
  } else if (mode === "editPass") {
    formComponent = <UserEditPassword selectedRow={selectedRow} setMode={setMode} />;
  }
  return (
    <>
      <Box
        sx={{
          marginTop: 3,
          width: "50%",
          marginRight: "auto",
          marginLeft: "auto",
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        {Object.keys(errors).map((key) => (
          <p key={key} style={{ color: "red", fontSize: 10 }}>
            {errors[key]}
          </p>
        ))}

        {formComponent}
      </Box>
      <Box
        sx={{
          width: "95%",
          m: "25px auto 2px auto",
          p: 0,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <PaginatedTable
          rows={rows}
          columns={columns}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          count={count}
          onAction={onAction}
        />
      </Box>
    </>
  );
};

export default User;
