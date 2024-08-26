import React from 'react';
import './css/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1> {/* 오늘 날짜 띄우기 */}
        </div>
    );
};

export default React.memo(Header);