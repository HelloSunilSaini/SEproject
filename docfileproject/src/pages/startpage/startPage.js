import React from "react";
import AllfilePage from "./allfilePage";
import SimilarityPage from './similarityPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading :false,Allfiles:[]};
    }

    componentDidMount(){}

    render() {
        return (
            <div>
                <Tabs>
                    <div 
                        style={{
                            width:"100%",
                            position:"fixed",
                            backgroundColor:"white"
                        }}
                    >
                        <TabList style={{margin:"20px"}} >
                            <Tab>All syatem files</Tab>
                            <Tab>files with similarity %</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <AllfilePage {...this.props}/>
                    </TabPanel>
                    <TabPanel>
                        <SimilarityPage {...this.props}/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default StartPage;