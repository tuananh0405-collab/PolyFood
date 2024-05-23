import React, { useState, useEffect } from "react";
import axios from "axios";

const Address = () => {
  const host = "https://provinces.open-api.vn/api/";
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    axios.get(host + "?depth=1").then((response) => {
      setProvinces(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      axios
        .get(host + "p/" + selectedProvince + "?depth=2")
        .then((response) => {
          setDistricts(response.data.districts);
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(host + "d/" + selectedDistrict + "?depth=2")
        .then((response) => {
          setWards(response.data.wards);
        });
    }
  }, [selectedDistrict]);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict("");
    setSelectedWard("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedWard("");
  };

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };

  return (
    <div className="container object-fit">
      {/* <h1>Chọn danh sách tỉnh</h1> */}
      <form action="" className="flex text-sm">
        {/* <div className="w-1/3"> */}
          <select
            name=""
            id="province"
            value={selectedProvince}
            onChange={handleProvinceChange}
            className="w-1/3 text-[12px]"
          >
            <option value="">Chọn tỉnh</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
        {/* </div> */}
        {/* <div className="w-1/3"> */}
          <select
            name=""
            id="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="w-1/3 text-[12px]"
          >
            <option value="">Chọn quận</option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
        {/* </div> */}
        {/* <div className="w-1/3"> */}
          <select
            name=""
            id="ward"
            value={selectedWard}
            onChange={handleWardChange}
            className="w-1/3 text-[12px]"

          >
            <option value="">Chọn phường</option>
            {wards.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </select>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Address;
