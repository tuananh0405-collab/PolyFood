import "./CheckoutProduct.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table, InputNumber } from "antd";
import { useStateValue } from "../../../context/StateProvider";

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
        <Input
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          defaultValue={record.quantity !== undefined ? record.quantity : 1}
        />
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

const CheckoutProduct = () => {
  // lấy giỏ hàng
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (productToAdd) => {
    const existingProductIndex = basket.findIndex(
      (product) => product.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the basket, update quantity
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex].quantity += 1;

      dispatch({
        type: "UPDATE_BASKET",
        newBasket: updatedBasket,
      });
    } else {
      // Product doesn't exist in the basket, add it
      dispatch({
        type: "ADD_TO_BASKET",
        item: { ...productToAdd, quantity: 1 },
      });
    }
  };

  // set thông tin sản phẩm cần display
  const [dataSource, setDataSource] = useState(
    basket.map((product, index) => ({
      key: index.toString(),
      id: product.id,
      image: product.image,
      name: product.title,
      age: product.price,
      quantity: product.quantity,
    }))
  );
  useEffect(() => {
    setDataSource(
      basket.map((product, index) => ({
        key: index.toString(),
        id: product.id,
        image: product.image,
        name: product.title,
        age: product.price,
        quantity: product.quantity,
      }))
    );
  }, [basket]);

  const [count, setCount] = useState(1);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);

    // Remove the product from the basket state
    const productToDelete = basket.find(
      (product, index) => index.toString() === key
    );
    if (productToDelete) {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: productToDelete.id, // Assuming you have a unique id for products
      });
    }
  };

  const defaultColumns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image) => (
        <img src={image} alt="Product" style={{ width: 100 }} />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: "30%",
      editable: false,
    },
    {
      title: "Đơn giá",
      dataIndex: "age",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      editable: false,
      render: (_, record) => (
        // <InputNumber
        //   min={1}
        //   defaultValue={record.quantity !== undefined ? record.quantity : 1}
        //   onChange={(value) => {
        //     if (value !== undefined) handleQuantityChange(record.key, value);
        //     else handleQuantityChange(record, 1);
        //   }}
        // />
        <InputNumber
          min={1}
          defaultValue={record.quantity !== undefined ? record.quantity : 1}
          onChange={(value) => {
            if ( value >= 0) {
              handleQuantityChange(record.key, value);
            } else {
              handleDelete(record.key);
            }
          }}
        />
      ),
    },
    {
      title: "Hoạt động",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleQuantityChange = (key, value) => {
    console.log("basket: ", basket);
    console.log("key: " + key + " value: " + value);
    const newData = [...dataSource];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      newData[index].quantity = value;
      setDataSource(newData);
      // Find the corresponding product in the basket and update its quantity
      const productToUpdate = basket.find(
        (product) => product.id === newData[index].id
      );

      if (productToUpdate != null) {
        dispatch({
          type: "UPDATE_QUANTITY",
          id: productToUpdate.id,
          quantity: value,
        });
      }
    }
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
  const handleChange =()=>{
    
  }
  

  return (
    <div>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        onChange={()=>handleChange}
      />
    </div>
  );
};

export default CheckoutProduct;
