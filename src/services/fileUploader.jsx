import React, { Component } from 'react';
import { FileService } from '../services/file-service.jsx';

export class FileUploader extends Component {
    constructor() {
        super();
        this.fileService = new FileService();
        this.state = {
            fileName: ""
        }

        this.getFileName = this.getFileName.bind(this);
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];

        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by Erikas');
        let self = this;
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
            console.log(this.getFileName(file.name));
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
                //some other error happened
               console.log("Upload error. HTTP error/status code=",error.message);
            }
        });
    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleUploadFile} />
            </div>
        )
    };

    getFileName (name) {
        this.setState({fileName: name})
    }
}

