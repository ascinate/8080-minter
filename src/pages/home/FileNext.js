import React, { useState } from 'react';

import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";

class FileNext extends React.Component {

  
  render(){

    const Uploader = () => {
      const [fileList, updateFileList] = useState([]);
      const props = {
        fileList,
        beforeUpload: file => {
          //File Type Check
          if (file.type !== 'image/png') {
            message.error(`${file.name} is not a png file`);
          }
          return file.type === 'image/png';
        },
        onChange: info => {
          console.log(info.fileList);
          // file.status is empty when beforeUpload return false
          updateFileList(info.fileList.filter(file => !!file.status));
        },
      };
      
      return (
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload png only</Button>
        </Upload>
      );
    };


    return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
         
      </div>
      
      <div className="container">
          
          <Uploader />
        </div>
      </div>
  );
}
}

export default FileNext;