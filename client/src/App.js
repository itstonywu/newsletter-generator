import { useEffect, useState } from 'react'

import submissionsService from './services/submissions'

import UploadForm from './components/UploadForm'
import DownloadButton from './components/DownloadButton'
import Submission from './components/Submssion'

function App() {
    const [submissions, setSubmissions] = useState([])
    const [templateType, setTemplateType] = useState('new')

    useEffect(() => {
        submissionsService.getAll().then(({ length, data }) => {
            setSubmissions(data)
        })
    }, [])

    const uploadSubmissionAndGenerate = async (file) => {
        const data = new FormData()
        data.append('submissions', file)

        let uploadZipRes = await submissionsService
            .uploadFile(data)
            .catch((err) => console.log(err))

        setSubmissions(uploadZipRes.data)
    }

    return (
        <div
            style={{
                maxWidth: '770px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <h1>Newsletter Generator</h1>

            <h2>Instructions:</h2>
            <ol>
                <li>Upload the zip data file</li>
                <li>Download the pre-filled template</li>
            </ol>
            <UploadForm upload={uploadSubmissionAndGenerate} />
            <div>
                <p>Uploaded submissions count: {submissions.length}</p>
                <ul>
                    {submissions.map((submission) => {
                        return (
                            <Submission
                                key={submission.uuid}
                                submission={submission}
                            />
                        )
                    })}
                </ul>
            </div>
            <h2>Select template format</h2>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
                <label htmlFor="new-template">New Template</label>
                <input
                    type="radio"
                    id="new-tempate"
                    name="new-template"
                    checked={templateType === 'new'}
                    onChange={() => setTemplateType('new')}
                ></input>
            </div>

            <DownloadButton templateType={templateType} />
        </div>
    )
}

export default App
