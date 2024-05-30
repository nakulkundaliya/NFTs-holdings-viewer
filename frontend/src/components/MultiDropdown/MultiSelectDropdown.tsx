import React from 'react';
// @ts-ignore
import Select, { ValueType, OptionTypeBase, Styles } from 'react-select';
import makeAnimated from 'react-select/animated';
import options from '../../utils';
import { Option } from '../../utils/interfaces';

const animatedComponents = makeAnimated();

interface MultiSelectDropdownProps {
  selectedOptions: Option[];
  handleChange: (selected: ValueType<OptionTypeBase>) => void;
}

const customStyles: Styles = {
  control: (provided: any) => ({
    ...provided,
    margin: '1rem 0',
    borderColor: '#ccc',
    boxShadow: 'none',
    marginLeft: 8
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#f8f9fa' : 'white',
    color: state.isSelected ? 'white' : 'black',
    padding: 10,
  }),
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ selectedOptions, handleChange }) => {
  return (
    <Select
      closeMenuOnSelect
      components={animatedComponents}
      placeholder="Chains"
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default MultiSelectDropdown;
