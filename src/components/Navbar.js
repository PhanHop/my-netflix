import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import NetflixLogo from '../statics/image/Netflix_Logo_RGB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import './maincontent.css'
function Navbar() {
    const searchInput = useRef(null);
    const [userInput, setUserInput] = useState('');
    const onChange = (event)=>{
        setUserInput(event.target.value);
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(userInput.length===0){
            navigate('/');
        }
        if(userInput.length>0){
            navigate(`/search?k=${userInput}`)
        }
    }, [userInput,searchInput]);
    return (
        <div style={{position: 'absolute', width: '100%', zIndex: '1'}}>
            <nav className='navbar navbar-light navbar-expand-lg' style={{ flexWrap: "nowrap" }}>
                <NavLink className='navbar-brand' to='/'><img src={NetflixLogo} alt="" style={{ width: 150 }} /></NavLink>
                <div className="navbar " id='navbarNav' style={{ width: "88%", justifyContent: "flex-end" }}>
                    <ul className="navbar-nav navbar-collapse collapse " > 
                        <li className="nav-item">
                            <Link to='/' className="nav-link textColor">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link textColor">TV Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link textColor">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link textColor">Recently Added</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link textColor">My List</Link>
                        </li>
                    </ul>
                    <div className='navbar justify-content-end ' >
                        <ul className="navbar-nav flex-nowrap flex-row">
                            <li className="nav-item textColor">
                                <div className="input-group input-group-sm mb-3" style={{ paddingTop: 5 }}>
                                    <div className="input-group-prepend">
                                        <FontAwesomeIcon icon={faSearch} className="input-group-text" />
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby='inputGroup-sizing-sm' 
                                            onChange={(event)=>onChange(event)}
                                           ref={searchInput}
                                    />
                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link to='/' className="nav-link collapse navbar-collapse textColor">Kid</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/' className="nav-link collapse navbar-collapse textColor">DVD</Link>
                            </li>
                            <li className="nav-item textColor">
                                <FontAwesomeIcon icon={faBell} style={{ padding: "12 20" }} />
                            </li>

                            <li className="nav-item  textColor">
                                <Link to='/' className="nav-link textColor">Phan Hop</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar