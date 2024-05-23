import React, { useState } from 'react';
import CardPay from './CardPay';
import { Link } from 'react-router-dom';

function DomesticWrap({ list }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const handleBankClick = (bank) => {
    setSelectedImage(bank.image);
    setSelectedName(bank.name);
    console.log(bank);
  };

  console.log(selectedImage);
  console.log(selectedName);

  return (
    <div className='DomesticWrap w-[600px] flex flex-wrap gap-2'>
      {list.map((bank, index) => (
        <Link to="/cardpay" key={index}>
          <div
            className="bank-item w-[135px] h-[75px] border border-1 border-gray-300 rounded-md flex items-center justify-center hover:cursor-pointer hover:border-blue-500"
            onClick={() => handleBankClick(bank)}
          >
            <img src={bank.image} alt="" className="w-[120px] h-[60px]" />
          </div>
        </Link>
      ))}
      {selectedImage && selectedName && (
        <CardPay image={selectedImage} name={selectedName} />
      )}
    </div>
  );
}

export default DomesticWrap;
