import React from 'react'

const Social = () => {
    return (
        <>
            <div className="home__social">
                <a href="https://github.com/Ragu162004" className="home__social-icon" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/ragulandiranm/" className="home__social-icon" target='_blank'>
                    <i className="uil uil-linkedin-alt"></i>
                </a>
                <a href="https://leetcode.com/u/Ragulandiran/" className="home__social-icon" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width="24" height="24" />
                </a>
            </div>
        </>
    )
}

export default Social