import React from 'react'
import styles from '../styles/Home.module.css'


function Popup({ title, sales, volumes, description }) {

    return (
        <div >

            <div className={`${styles.popupTitle} pop`}>
                <h1>
                    {title}
                </h1>
            </div>

            <div className="popUpFrame">
                <div className="content">
                    <p>Title Sales : {sales}</p>
                    <p>Title Volume : {volumes}</p>
                    <p >Description : {description}</p>
                </div>
            </div>
        </div>
    )
}

export default Popup
