import React, { useEffect } from 'react';
import styled from 'styled-components';

const Date = styled.input`
  margin-left: 50px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  height: 50px;
  text-align: center;
  width: 200px;
  padding-right: 15px; 
  box-sizing: border-box;
  margin-bottom : 20px;
`;

const SelectedDate = ({ selectedDate, setSelectedDate }) => {
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Date type="date" onChange={handleChange} value={selectedDate} />
  );
};

export default SelectedDate;
