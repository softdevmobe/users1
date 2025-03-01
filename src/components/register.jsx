import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import PaginatedTable from "./paginatedTable";
import EditForm from "./editForm";
import DeleteForm from "./deleteForm";
import EditPasswordForm from "./editPasswordForm";
import * as yup from "yup";
const MODES = {
  DEFAULT: "DEFAULT",
  EDIT: "EDIT",
  DELETE: "DELETE",
  EDITEPASS: "EDITEPASS",
};
const Register = () => {
  const [mode, setMode] = useState(MODES.DEFAULT);
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [userData, setUserData] = useState({});

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(10);

  const columns = [
    { id: "code", label: "شناسه" },
    { id: "nameFamily", label: "نام" },
    { id: "userName", label: "یوزر" },
    { id: "roleCode", label: "roleCode" },
    { id: "imagePath", label: "imagePath" },
    { id: "action", label: "عملیات", actions: ["edit", "delete", "editPass"] },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/users/users", { page, pageSize });
        if (response.status !== 200) {
          const errorData = await response.json();
          setErrors(errorData.message || errorData.statusText);
          return;
        }
        const dataUser = await response.data.user;
        setRows(dataUser.recordset);
        setCount(dataUser.output.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, pageSize]);

  const schema = yup.object().shape({
    nameFamily: yup
      .string()
      .required("نام نمی تواند خالی باشد ")
      .min(3, "نام کوچکتر از 3 نباشد")
      .max(50, "نام بزرگتر از 50 نباشد"),
    userName: yup
      .string()
      .required("نام کاریری نمی تواند خالی باشد ")
      .min(3, "نام کاربری کوچکتر از 3 نباشد")
      .max(30, "نام کاربری بزرگتر از 30 نباشد"),
    password: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد"),
  });

  const schemaEdit = yup.object().shape({
    nameFamily: yup
      .string()
      .required("نام نمی تواند خالی باشد ")
      .min(3, "نام کوچکتر از 3 نباشد")
      .max(50, "نام بزرگتر از 50 نباشد"),
    userName: yup
      .string()
      .required("نام کاریری نمی تواند خالی باشد ")
      .min(3, "نام کاربری کوچکتر از 3 نباشد")
      .max(30, "نام کاربری بزرگتر از 30 نباشد"),
  });

  const schemaEditPassword = yup.object().shape({
    currentPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد"),
    newPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد")
      .notOneOf([yup.ref("currentPassword")], "رمز عبور جدید باید با رمزعبور قبلی متفاوت باشد ."),
    confirmNewPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .oneOf([yup.ref("newPassword")], "رمز عبور جدید و تایید رمز عبور جدید باید یکسان باشد ."),
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPage(0);
    setPageSize(newPageSize);
  };

  const onDelete = (row) => {
    setUserData({
      code: row.code,
      userName: row.userName,
      nameFamily: row.nameFamily,
    });
    setMode(MODES.DELETE);
  };

  const onEdit = (row) => {
    setUserData({
      code: row.code,
      userName: row.userName,
      nameFamily: row.nameFamily,
      imagePath: row.imagePath,
    });
    setMode(MODES.EDIT);
  };

  const onEditPass = (row) => {
    setUserData({
      code: row.code,
      userName: row.userName,
    });
    setMode(MODES.EDITEPASS);
  };

  const handleSubmitDelete = (row) => {
    console.log("Delete row:", userData);
    setMode(MODES.DELETE);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log("Edit row:", userData);
    setMode(MODES.EDIT);
  };

  const handleSubmitEditPass = async (e) => {
    e.preventDefault();
    setMode(MODES.EDITEPASS);
    console.log("edit pass : ", userData);
  };

  const handleChange1 = async (value_) => {
    setImageFile(value_);
    const formData = new FormData();
    formData.append("image", value_);

    try {
      const response = await axios.post("/api/users", formData);
      setUserData({ ...userData, imagePath: response.data });
      setErrors({});
    } catch (error) {
      setUserData({ ...userData, imagePath: "" });
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };
      setErrors(errorMessages);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userData : ", userData);
    try {
      await schemaEdit.validate(userData, { abortEarly: false });
      const response = await axios.post("/api/users/register", userData);
      setUserData({ ...userData, imagePath: response.data.imagePath });
      setErrors({});
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      }
    }
  };
  let formComponent;
  if (mode === MODES.DELETE) {
    formComponent = (
      <DeleteForm userData={userData} handleSubmitDelete={handleSubmitDelete} onCancel={() => setMode(MODES.DEFAULT)} />
    );
  } else if (mode === MODES.EDIT) {
    formComponent = (
      <EditForm
        userData={userData}
        handleChange={handleChange}
        handleChange1={handleChange1}
        imageFile={imageFile}
        handleSubmitEdit={handleSubmitEdit}
      />
    );
  } else if (mode === MODES.EDITEPASS) {
    formComponent = (
      <EditPasswordForm userData={userData} handleChange={handleChange} handleSubmitEditPass={handleSubmitEditPass} />
    );
  }
  return (
    <>
      <Box
        sx={{
          width: "50%",
          m: "auto",
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
          onDelete={onDelete}
          onEdit={onEdit}
          onEditPass={onEditPass}
          count={count}
        />
      </Box>
    </>
  );
};

export default Register;
