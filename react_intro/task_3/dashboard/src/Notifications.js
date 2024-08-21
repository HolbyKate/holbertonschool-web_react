// Create notifications elements

import React from 'react';
import './Notifications.css';


function handleCloseClick() {
    console.log('Close button has been clicked');
}

//function to get latest notifications
function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                />
            </ul>
            <button
                onClick={handleCloseClick}
                aria-label="Close"
            >
                x
            </button>
        </div>
    );
}

export default Notifications;
