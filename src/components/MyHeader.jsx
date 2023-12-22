import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaThLarge, FaTh } from "react-icons/fa";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <h2 className="text-white px-3">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            size="sm"
            className="rounded-0"
            style={{ backgroundColor: '#221f1f' }}
          >
            Genres &nbsp;
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item className="text-white bg-dark" href="#">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Drama
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Thriller
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
      <FaThLarge className='text-white m-2' />
        <FaTh className='text-white m-2'/>
      </div>
    </div>
  );
};

export default Header;
