import React from 'react';

//import { Table, Input, Popconfirm } from 'antd';
class KpiTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, word</h1>
                <h2>it is {this.state.date.toLocaleDateString()}.</h2>
            </div>
        )
    }
}

export default KpiTable;