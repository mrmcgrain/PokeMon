import React from 'react'

const Test = ( {user} ) => {
    return (
        <div id="Test">
            {/* {console.log("props", props)} */}
            <div>Test

                <p>{user.username}</p>
                <p>{user.role}</p>

            </div>

        </div>
    )
}

export default Test