import React from 'react';
//import { css } from 'react-emotion';
//import { ClipLoader } from 'react-spinners';
import ReactTimeout from 'react-timeout';

/* const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`; */

class RowLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			on: true
		}
		if (this.props.infiniteTime === true){
			this.setState({on:true})
		}else {
			this.props.setTimeout(this.toggle, 10000)
		}
	}
	toggle = () => {
		this.setState({ on: false })
	}
	render() {
		return (
			<div>
				{this.state.on === true &&
					<center>
						{/* <ClipLoader
							className={override}
							sizeUnit={"px"}
							height={50}
							width={50}
							size={20}
							color={'#123abc'}
							loading={true}
						/> */}
						{/* <img
							src={require('../../images/Google Search Logo GIF.gif')}
							alt=""
							style={{
								margin: "10px",
								width: "30px",
								height: "30px"
							}}
							onClick={this.homePage}
						/> */}
						<p>Loading...</p>
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

export default ReactTimeout(RowLoader);
