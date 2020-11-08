import React, { useEffect, useState } from 'react';
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import './ImagePreview.css'
import Button from 'react-bootstrap/Button'

const ImagePreview = () => {
   
    useEffect(()=>{
        const upload = new FileUploadWithPreview('myUniqueUploadId')
    }, []);

  return (
        <div>
            <div className="custom-file-container" data-upload-id="myUniqueUploadId">
                <label  
                >Upload File
        <a
                        href="javascript:void(0)"
                        class="custom-file-container__image-clear"
                        title="Clear Image"
                    >&times;</a
                    >

                </label
                >
                <label class="custom-file-container__custom-file ">
                    <input 
                        type="file"
                        class="custom-file-container__custom-file__custom-file-input "
                        accept="*"
                        multiple
                        aria-label="Choose File"
                    />
                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                    <span  
                        class="custom-file-container__custom-file__custom-file-control"
                    ></span>
                </label>
                <div class="custom-file-container__image-preview "></div>
            </div>
        </div>
    );
};

export default ImagePreview;