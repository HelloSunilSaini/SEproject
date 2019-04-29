import React from "react";
import Loader from '../../components/loader';
import { Icon } from 'react-icons-kit';
import { ic_delete } from "react-icons-kit/md";

import {getAllFiles,deletefiles } from "./methods";

import fileUrl from "file-url";


class AllfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading :false,Allfiles:[]};
    }

    componentDidMount(){
        getAllFiles().then(result=>{
            this.setState({Allfiles:result,loading:false},()=>{
                console.log(this.state)
            })
        })
    }

    openFile = (path) => {
        console.log(path)
        var url = fileUrl(path)
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
        var filepathsplit = p.split('/')
        var filename = filepathsplit[filepathsplit.length -1]
        return (
            <tr key={p} style={{width:"100%"}}>
                <td style={{width:"10%"}}>
                    <img 
                        src={require('../docfile.png')}
                        alt=""
                        style={{
                            margin: "10px",
                            width: "70px",
                            height: "70px"
                        }}
                    />
                </td>
                <td style={{width:"60%"}}>
                    <div className="row" style={{fontWeight:"bold"}}>
                        FileName : {filename}
                    </div>
                    <div className="row" >
                        <button 
                            type="button" 
                            className="btn btn-link" 
                            onClick={()=>{
                                this.openFile(p)
                            }}
                            style={{fontSize:"12px",paddingTop:"0px",paddingLeft:"0px"}}
                        >
                            {p}
                        </button>
                    </div>
                </td>
                <td style={{width:"10%"}}>
                    <button 
                        type="button" 
                        className="btn btn-link"
                        style={{color:"red", fontWeight:"bold"}}
                        onClick={()=>{
                            this.deletefile(p)
                        }}
                    > 
                        <Icon icon={ic_delete} size={28}/> delete 
                    </button>
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
                <div style={{paddingLeft:"20px",paddingTop:"80px"}}>
                    <table>
                        <tbody>
                            {this.state.Allfiles.map(this.mappingFunction)}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default AllfilePage;