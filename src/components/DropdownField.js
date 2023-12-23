import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function DropdownField({ direction = "vertical", textToogle, listItems, data, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="d-flex">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle caret>{textToogle}</DropdownToggle>
                <DropdownMenu {...args}>
                    {listItems && listItems.map((item) => (
                        <DropdownItem onClick={() => { item.onClick(item, data) }}>{item.description}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

DropdownField.propTypes = {
    direction: PropTypes.string,
};

export default DropdownField;