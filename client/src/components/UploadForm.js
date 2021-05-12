import React, { useState } from 'react'

const UploadForm = ({ upload }) => {
    const [file, setFile] = useState(null)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        upload(file)
    }

    const handleOnChange = (event) => {
        const fileInputed = event.target.files[0]
        setFile(fileInputed)
    }

    return (
        <div style={{ marginBottom: '10px' }}>
            <form onSubmit={handleOnSubmit}>
                <h2>Upload zip file</h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '1rem',
                    }}
                >
                    <label style={{ marginBottom: '1rem' }}>
                        Upload the submissions zip file
                    </label>
                    <input onChange={handleOnChange} type="file" name="file" />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default UploadForm
