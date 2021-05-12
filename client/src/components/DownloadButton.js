import React from 'react'
import axios from 'axios'
import templateServices from '../services/templates'
import styles from './Download.module.css'

const DownloadButton = ({ templateType }) => {
    const downloadTemplate = async (templateType) => {
        const generateTemplate = await templateServices.generateTemplate(
            templateType,
        )
        const downloadFromServer = await templateServices.download()

        axios
            .all([generateTemplate, downloadFromServer])
            .then(([generateRes, downloadRes]) => {
                const url = window.URL.createObjectURL(
                    new Blob([downloadRes.data]),
                )
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'template.html')
                document.body.appendChild(link)
                link.click()
            })
            .catch((err) => console.log(err))
    }

    return (
        <button
            className={styles.download}
            onClick={() => downloadTemplate(templateType)}
        >
            Download Template
        </button>
    )
}

export default DownloadButton
