import React from 'react';
//import { css } from 'react-emotion';
//import { ClipLoader } from 'react-spinners';
import ReactTimeout from 'react-timeout';

/* const override = css`
    display: block;
    margin: 0 auto;
	border-color: red;
`; */

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			on: true,
		}
		if (this.props.time === undefined || this.props.time === null){
			this.props.setTimeout(this.toggle, 10000)
		}
		else {
			this.props.setTimeout(this.toggle, this.props.time)
		}
	}
	toggle = () => {
		this.setState({ on: false })
	}
	render() {
		return (
			<div>
				{this.state.on === true &&
					<center style={{ marginTop: "250px" }}>
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
								width: "60px",
								height: "60px"
							}}
							onClick={this.homePage}
						/> */}
						<p>Loading...</p>
					</center>
				}
				{this.state.on === false &&
					<div style={{ marginTop: "250px" }}>
						<center>your internet connection seems slow</center>
					</div>
				}
			</div>
		);
	}
}
export default ReactTimeout(Loader);
