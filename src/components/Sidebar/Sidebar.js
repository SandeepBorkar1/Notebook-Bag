import plusImage from '../../images/plus.png'
import React, { useState } from 'react'
import './Sidebar.css'
function Sidebar(props) {
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
    const [listopen, setlistopen] = useState(false);
    const [btnopen, setbtnopen] = useState(false);

    return (
        <div className='Sidebar'>

            <img src={plusImage} alt="imageplus" className='plus-icon'
                onClick={() => setlistopen(!listopen)} />
            <ul className={`sidebar_list ${listopen ? "sidebar_list_active" : ""}`}>
                {
                    colors.map((item, index) => (
                        <li
                            key={index}
                            className='sidebar_list_item'
                            style={{ backgroundColor: item }}
                            onClick={() => props.addNote(item)}   //adding new notes
                        />
                    )

                    )
                }
                <li className='sidebar_list_items'>FuckU</li>

            </ul>
            <p className={`timepass ${btnopen ? "timepass_active" : ""}`} onClick={() => setbtnopen(!btnopen)}> Timepass paragraph content. <br />
                More content to expand the paragraph when clicked.</p>


        </div>
    )
}

export default Sidebar
