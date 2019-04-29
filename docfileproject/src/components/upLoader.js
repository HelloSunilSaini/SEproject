import React from 'react';
import { css } from 'react-emotion';
import { SyncLoader } from 'react-spinners';
import ReactTimeout from 'react-timeout';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Uploader extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			on : true
		}
		this.props.setTimeout(this.toggle, 10000)
	}
	toggle=()=>{
		this.setState({on : false})
	}
	render(){
        return (
            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    width: "102%",
                    height: "500%",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    zIndex: 9999,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0000004b",
                    margin: "auto",
                    overflow: "auto",
                    textAlign: "center",
                }}
            >
                {this.state.on === true &&
                    <center>
                        <div
                            style={{
                                marginTop: "200px",
                                border: "1px",
                                color: "white"
                            }}
                        >
                            <br />
                            <SyncLoader
                                className={override}
                                sizeUnit={"px"}
                                height={50}
                                width={50}
                                size={20}
                                color={'#123abc'}
                                loading={true}
                            />
                            <p>Uploading...</p>
                        </div>
                    </center>
                }
                {this.state.on === false &&
					<div>
						<center>your internet connection seems slow</center>
					</div>
				}
            </div>
        );
    }
}

export default ReactTimeout(Uploader);