import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.png";

const ComboboxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  width: 320px;
  border: 1px solid rgb(209, 214, 221);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

  color: rgb(44, 49, 55);
  border-radius: 6px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 1rem;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ClearButton = styled(Button)`
  &:hover img {
    border-radius: 50%;
    background-color: rgb(245, 247, 251);
  }
`;

const DropdownButton = styled(Button)`
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin-top: 0.2rem;
`;

const EmptyOption = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

// const SelectedOption = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 5px;
//   padding: 5px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const RemoveButton = styled(ClearButton)`
//   margin-left: 5px;
// `;

const CustomSelect = ({ options, isMulti = false, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // 监听全局点击事件
  useEffect(() => {
    const handleClick = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const closeDropdown = (newOptions) => {
    setIsOpen(false);
    onSelect(newOptions || selectedOptions);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    if (isMulti) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
      setInputValue(option.name);
      closeDropdown([option]);
    }
  };

  const filteredOptions = !options.length
    ? []
    : options.filter((option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      );

  return (
    <ComboboxContainer ref={dropdownRef}>
      <InputWrapper>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        {inputValue && (
          <ClearButton onClick={() => setInputValue("")}>
            <img
              aria-hidden="true"
              alt="close"
              src="https://openui.fly.dev/openui/24x24.svg?text=✖"
            />
          </ClearButton>
        )}
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          <img aria-hidden="true" alt="dropdown" src={dropdown} />
        </DropdownButton>
      </InputWrapper>
      {isOpen &&
        (filteredOptions.length ? (
          <OptionsList>
            {filteredOptions.map((option) => (
              <Option
                key={option.coingecko_id}
                onClick={() => handleOptionSelect(option)}
              >
                {option.name}
              </Option>
            ))}
          </OptionsList>
        ) : (
          <EmptyOption>empty</EmptyOption>
        ))}
      {/* {selectedOptions.map((option) => (
        <SelectedOption key={option.coingecko_id}>
          {option.name}
          <RemoveButton onClick={() => handleOptionSelect(option)}>
            <img
              aria-hidden="true"
              alt="close"
              src="https://openui.fly.dev/openui/24x24.svg?text=✖"
            />
          </RemoveButton>
        </SelectedOption>
      ))} */}
    </ComboboxContainer>
  );
};

export default CustomSelect;
