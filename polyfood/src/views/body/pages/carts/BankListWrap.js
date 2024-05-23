import React from "react";

function BankListWrap({ list }) {
  return (
    <div className="BankListWrap w-[880px] flex flex-wrap gap-2">
      {list.map((bank, index) => (
        <div
          key={index}
          className="bank-item w-[100px] h-[55px] border border-1 border-gray-300 rounded-md flex items-center justify-center"
        >
          <img src={bank.image} alt={bank.name} className="w-[90px] h-[48px]"/>
        </div>
      ))}
    </div>
  );
}

export default BankListWrap;
