import React from 'react'
import Student from './student'
import './user-directory.css'

const UserDirectory = ({ students }) => {
    return (
        <div className='container mb-4 pb-4'>
            <div style={{textAlign:'center'}} className="headline mb-4 mt-4 pt-4">
                What students say about us
            </div>
            <div className='layout'>
                {students
                    .filter((student, idx) => idx < 6)
                    .map(({ id, ...otherProps }) => (
                        <Student key={id} {...otherProps} />
                    ))}
            </div>
        </div>
    )
}

export default UserDirectory