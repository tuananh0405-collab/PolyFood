import React from "react";
import { Tabs } from 'antd';
import UserManagement from "./user/UserManagement"
import ProductsManagement from "./product/ProductsManagement";
import OderManagement from "./order/OderManagement";
import { useParams } from "react-router-dom";

const { TabPane } = Tabs;

const HomeAdmin = () => {
const {token} = useParams()
// console.log(token);

  const onChange = (key) => {
    // console.log(key);
  };

  const renderTabContent = (content) => {
    if (content === 'User Management') {
      return <UserManagement token={token}/>;
    }
    if (content === 'Products Management') {
      return <ProductsManagement token={token}/>;
    }
    if (content === 'Order Management') {
      return <OderManagement />;
    }
    return `Content of ${content}`;
  };

  const items = [
    {
      key: '1',
      label: 'User Management',
    },
    {
      key: '2',
      label: 'Products Management',
    },
    // {
    //   key: '3',
    //   label: 'Order Management',
    // },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange} className="flex items-center justify-center">
        {items.map(item => (
          <TabPane tab={item.label} key={item.key} className="w-full">
            {renderTabContent(item.label)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeAdmin;
