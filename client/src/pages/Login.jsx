import React from 'react'
import { useState } from 'react'
import logincss from "../styles/login.module.scss"
function login() {
    const [isPassVisible, setisPassVisible] = useState(true)
    return (
        <>
            <div className={logincss.container}>
                <div className={logincss.card}>
                    <h2 className={logincss.heading}>Create Your Account</h2>
                    <div className={logincss.row}>
                        <input type="text" placeholder='Enter First Name' />
                        <input type="text" placeholder='Enter Last Name' />
                    </div>
                    <div className={logincss.row}>
                        <input type="text" placeholder='Create User name' />
                    </div>
                    <div className={logincss.row}>
                        <input type="text" placeholder='Enter Email Address' />
                    </div>
                    <div className={logincss.row} style={{justifyContent:"start"}}>
                        <input type="text" placeholder='+1' style={{
                            width: "50px", flexShrink: 0, textAlign: "center"
                        }} />
                        <input type="number" placeholder='00000  00000' style={{
                            maxWidth: "200px", flexShrink: 0
                        }} />
                    </div>
                    <div className={logincss.row}>
                        <input type={isPassVisible ? "text" : "password"} placeholder='Password' />
                        <input type={isPassVisible ? "text" : "password"} placeholder='Confirm' />
                        
                        <div className={logincss.hide} onClick={() =>{
                            setisPassVisible(!isPassVisible);
                        }}>
                            {isPassVisible ? <i class="ri-eye-line" /> : <i class="ri-eye-off-line"></i>}
                        </div>
                    </div>
                    <div className={logincss.cardfooter}>
                        <div className={logincss.row} style={{justifyContent:"space-between"}}>
                            <h4>SignIn Instead</h4>
                            <button className={logincss.btn1}>Submit</button>
                        </div>
                    </div>
                    {/* Very speacial input box */}
                    {/* <div className={logincss.row}>
                        <div className={`${logincss.inputGroup} `}>
                            <input type="text" required placeholder='Enter Name' />
                            <label for="name">Name</label>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default login