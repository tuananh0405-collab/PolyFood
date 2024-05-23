import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import ClearIcon from "@mui/icons-material/Clear";
import { Rate, Modal } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const OrderManagement = () => {
  const {id}=useParams()
  const {token}=useParams()
  console.log(token);
  const [showAddButton, setShowAddButton] = useState(false); // New state

  const [addButtonStates, setAddButtonStates] = useState({});

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dXR1YW5hbmgwNDA1MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJleHAiOjE2OTI4NjkzMzJ9.f-NBZLpnT5S48aJVvYui0VUffLPHKVPyWrdsWjmnFnY"; // Replace with your actual bearer token
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  const loadProducts = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/auth/admin/getOrdersByUserId/${id}`,
      {headers}
    );
    setDataSource(result.data);
  };

  const [count, setCount] = useState(2);

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:8080/api/v1/auth/admin/deleteOrderById/${id.order_id}`,
      {headers}
    );
    loadProducts();
  };
  let navigate = useNavigate();

  const handleEdit = (record) => {
    navigate(`/adminuser/${token}/editOrder/${id}/${record.order_id}`);
  };

  const defaultColumns = [
    {
      title: "order_id",
      dataIndex: "order_id",
      width: "10%",
      editable: true,
    },
    {
      title: "name",
      dataIndex: "name",
      editable: true,

    },
    {
      title: "original_price",
      dataIndex: "original_price",
      editable: true,

    },
    {
      title: "actual_price",
      dataIndex: "actual_price",
      editable: true,

    },

    {
      title: "quantity",
      dataIndex: "quantity",
      editable: true,

    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => <a onClick={() => handleEdit(record)}>Edit</a>,
      editable: false,
    },
    {
      title: "Delete",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title={
              addButtonStates[record.key] ? "Sure to add?" : "Sure to delete?"
            }
            onConfirm={() => {
              if (addButtonStates[record.key]) {
                handleAddButton(record);
                // Reset the "Add" button state for the row
                setAddButtonStates((prevStates) => ({
                  ...prevStates,
                  [record.key]: false,
                }));
              } else {
                handleDelete(record);
              }
            }}
          >
            <a className="flex items-center justify-center">
              {addButtonStates[record.key] ? "Add" : <ClearIcon />}
            </a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAddButton = async (record) => {
    const response = await axios.post(
      `http://localhost:8080/api/v1/auth/admin/addOrdersForUserId/${id}`,
      record,
      {headers}
    );
  };
  const handleAdd = async () => {
    const newData = {
      key: count,
      name: "",
      original_price: "",
      actual_price: "",
      quantity: "",
      
    };

    setDataSource([...dataSource, newData]);
    setCount(count + 1);

    // Set the "Add" button state for the new row
    setAddButtonStates((prevStates) => ({
      ...prevStates,
      [count]: true,
    }));
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={() => {
          handleAdd();
          setShowAddButton(true);
        }}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add an order
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default OrderManagement;
