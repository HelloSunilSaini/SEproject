import React from "react";
import Loader from '../../components/loader';
import { Icon } from 'react-icons-kit';
import { ic_delete } from "react-icons-kit/md";

import {getsimilaritylistfiles,deletefiles } from "./methods";

import fileUrl from "file-url";


class SimilarityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading :false,SimilarityFileslist:[]};
    }

    componentDidMount(){
        getsimilaritylistfiles().then(result=>{
            this.setState({SimilarityFileslist:result,loading:false},()=>{
                console.log(this.state)
            })
        })
    }

    openFile = (path) => {
        console.log(path)
        var url = fileUrl(path)
        console.log(url)
        url = "http://localhost:80" + url.substring(7)
        console.log(url)
        window.open(url)
    }

    sleep = (ms)=> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    deletefile = (file) =>{
        var body = JSON.stringify({files:[file]})
        // console.log(body)
        deletefiles(body).then(result =>{
            console.log(result)
            this.sleep(5000).then(()=>{
                this.componentDidMount()
            })
        })
    }

    mappingFunction = (p) => {
        var file1path = p.file1
        var file1pathsplit = file1path.split('/')
        var file1name = file1pathsplit[file1pathsplit.length -1]

        var file2path = p.file2
        var file2pathsplit = file2path.split('/')
        var file2name = file2pathsplit[file2pathsplit.length -1]

        var similarity = ((p.similarity)*1).toFixed(2)

        return (
            <tr key={file1path+file2path} style={{border:"1px solid"}}>
                <td style={{width:"10%"}}>
                    <img 
                        src={require('../docfile.png')}
                        alt=""
                        style={{
                            margin: "10px",
                            width: "60px",
                            height: "60px"
                        }}
                    />
                    <img 
                        src={require('../docfile.png')}
                        alt=""
                        style={{
                            margin: "10px",
                            width: "60px",
                            height: "60px"
                        }}
                    />
                </td>
                <td style={{width:"60%"}}>
                    <div className="row" style={{fontWeight:"bold"}}>
                        FileName : {file1name}
                    </div>
                    <div className="row" style={{fontSize:"12px"}}>
                        <button 
                            type="button" 
                            className="btn btn-link" 
                            onClick={()=>{
                                this.openFile(file1path)
                            }}
                            style={{
                                fontSize:"12px",
                                paddingLeft:"0px"
                            }}
                            >
                                {file1path}
                            </button>
                    </div>
                    <div className="row" style={{fontWeight:"bold",marginTop:"30px"}}>
                        FileName : {file2name}
                    </div>
                    <div className="row" style={{fontSize:"12px"}}>
                        <button 
                            type="button" 
                            className="btn btn-link" 
                            onClick={()=>{
                                this.openFile(file2path)
                            }}
                            style={{
                                fontSize:"12px",
                                paddingLeft:"0px"
                            }}
                            >
                                {file2path}
                            </button>
                    </div>
                </td>
                <td style={{width:"10%"}}>
                    <div className="row" style={{fontWeight:"bold",fontSize:"16px"}}>
                        Similarity
                    </div>
                    <div className="row" style={{marginTop:"10px"}}>
                        {similarity}%
                    </div>
                </td>
                <td style={{width:"10%"}}>
                    <div className="row" >
                        <button 
                            type="button" 
                            className="btn btn-link"
                            style={{color:"red", fontWeight:"bold"}}
                            onClick={()=>{
                                this.deletefile(file1path)
                            }}
                        > 
                            <Icon icon={ic_delete} size={32}/> delete 
                        </button>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                        <button 
                            type="button" 
                            className="btn btn-link"
                            style={{color:"red", fontWeight:"bold"}}
                            onClick={()=>{
                                this.deletefile(file2path)
                            }}
                        > 
                            <Icon icon={ic_delete} size={32}/> delete 
                        </button>
                    </div>
                </td>

            </tr>
        )
    }

    render() {
        if (this.state.loading) {
            return <Loader />
        }
        
        else{
            return (
                <div style={{paddingLeft:"20px",paddingTop:"80px",paddingRight:"20px"}}>
                    <table>
                        <tbody>
                            {this.state.SimilarityFileslist.map(this.mappingFunction)}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default SimilarityPage;