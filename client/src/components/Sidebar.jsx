import React, { useState } from 'react';
import sidecss from '../styles/sidebar.module.scss'
import profilepic from '../assets/profileimg.png'
import { Link, useNavigate } from 'react-router-dom';
function Sidebar() {

  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState(0); // Initially selected page index

  const pages = [
    { id: 0, title: 'Page 1', link: '/' },
    { id: 1, title: 'Logout', link: '/login' },
    { id: 2, title: 'Page 3', link: '/page3' },
    { id: 3, title: 'Page 4', link: '/page4' },
  ];

  const handlePageClick = (pageIndex) => {
    setSelectedPage(pageIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && selectedPage > 0) {
      setSelectedPage(selectedPage - 1);
    } else if (e.key === 'ArrowDown' && selectedPage < pages.length - 1) {
      setSelectedPage(selectedPage + 1);
    }
    else if (e.key === 'Enter') {
      navigate(pages[selectedPage].link);
    }
  };

  return (
    <div className={`${sidecss.container} flexverti`}>
      <div className={`${sidecss.profileinfo} flexverti`}>
        <img src={profilepic} alt="" />
        <h2>Batlya Maruti</h2>
        <h4>username - b_maruti</h4>
      </div>
      <div className={`${sidecss.navlist} flexverti`} onKeyDown={handleKeyDown} tabIndex={0}>

        {pages.map((page) => (
          <li
            key={page.id}
            onClick={() => handlePageClick(page.id)}
            className={selectedPage === page.id ? sidecss.active : sidecss.inactive}
          >
            <Link to={page.link} className='flexhori'>{page.title}</Link>
          </li>
        ))}

      </div>
    </div>
  )
}

export default Sidebar