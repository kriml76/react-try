/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: this.props.editable || false,
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input
                                value={value}
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        :
                        <div className="editable-row-text">
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}

class KpiTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '销售目标',
            dataIndex: 'tar',
            width: '15%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'tar', text),
        }, {
            title: '一月',
            dataIndex: 'jan',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'jan', text),
        }, {
            title: '二月',
            dataIndex: 'feb',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'feb', text),
        }, {
            title: '三月',
            dataIndex: 'mar',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'mar', text),
        }, {
            title: '四月',
            dataIndex: 'apr',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'apr', text),
        }, {
            title: '五月',
            dataIndex: 'may',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'may', text),
        }, {
            title: '六月',
            dataIndex: 'jun',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'jun', text),
        }, {
            title: '七月',
            dataIndex: 'jul',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'jul', text),
        }, {
            title: '八月',
            dataIndex: 'aug',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'aug', text),
        }, {
            title: '九月',
            dataIndex: 'ste',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'ste', text),
        }, {
            title: '十月',
            dataIndex: 'oct',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'oct', text),
        }, {
            title: '十一月',
            dataIndex: 'nov',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'nov', text),
        }, {
            title: '十二月',
            dataIndex: 'dev',
            width: '6.5%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'dev', text),
        }, {
            title: 'opera',
            dataIndex: 'operation',
            width: '10',
            render: (text, record, index) => {
                const { editable } = this.state.data[index].jan;
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                                    <a onClick={() => this.editDone(index, 'save')}>Save</a>
                                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                                :
                                <span>
                                    <a onClick={() => this.edit(index)}>Edit</a>
                                </span>
                        }
                    </div>
                );
            },
        }];
        this.state = {
            data: [{
                key: '0',
                tar: {
                    value: '全司（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '1',
                tar: {
                    value: '东区（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '2',
                tar: {
                    value: '南区（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '3',
                tar: {
                    value: '北区（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '4',
                tar: {
                    value: '西区（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '5',
                tar: {
                    value: '中区（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '6',
                tar: {
                    value: '宁波（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '7',
                tar: {
                    value: '上海（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '8',
                tar: {
                    value: '苏州（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '9',
                tar: {
                    value: '无锡（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '320',
                },
                ste: {
                    editable: false,
                    value: '1',
                },
                oct: {
                    editable: false,
                    value: '2',
                },
                nov: {
                    editable: false,
                    value: '3',
                },
                dev: {
                    editable: false,
                    value: '4',
                }
            },{
                key: '10',
                tar: {
                    value: '南京（k）',
                },
                jan: {
                    editable: false,
                    value: '5',
                },
                feb: {
                    editable: false,
                    value: '6',
                },
                mar: {
                    editable: false,
                    value: '7',
                },
                apr: {
                    editable: false,
                    value: '8',
                },
                may: {
                    editable: false,
                    value: '9',
                },
                jun: {
                    editable: false,
                    value: '10',
                },
                jul: {
                    editable: false,
                    value: '11',
                },
                aug: {
                    editable: false,
                    value: '12',
                },
                ste: {
                    editable: false,
                    value: '13',
                },
                oct: {
                    editable: false,
                    value: '14',
                },
                nov: {
                    editable: false,
                    value: '15',
                },
                dev: {
                    editable: false,
                    value: '16',
                }
            },{
                key: '11',
                tar: {
                    value: '广州（k）',
                },
                jan: {
                    editable: false,
                    value: '17',
                },
                feb: {
                    editable: false,
                    value: '18',
                },
                mar: {
                    editable: false,
                    value: '19',
                },
                apr: {
                    editable: false,
                    value: '20',
                },
                may: {
                    editable: false,
                    value: '21',
                },
                jun: {
                    editable: false,
                    value: '22',
                },
                jul: {
                    editable: false,
                    value: '23',
                },
                aug: {
                    editable: false,
                    value: '24',
                },
                ste: {
                    editable: false,
                    value: '25',
                },
                oct: {
                    editable: false,
                    value: '26',
                },
                nov: {
                    editable: false,
                    value: '27',
                },
                dev: {
                    editable: false,
                    value: '28',
                }
            },{
                key: '12',
                tar: {
                    value: '深圳（k）',
                },
                jan: {
                    editable: false,
                    value: '29',
                },
                feb: {
                    editable: false,
                    value: '30',
                },
                mar: {
                    editable: false,
                    value: '31',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '33',
                },
                jun: {
                    editable: false,
                    value: '34',
                },
                jul: {
                    editable: false,
                    value: '35',
                },
                aug: {
                    editable: false,
                    value: '36',
                },
                ste: {
                    editable: false,
                    value: '37',
                },
                oct: {
                    editable: false,
                    value: '38',
                },
                nov: {
                    editable: false,
                    value: '39',
                },
                dev: {
                    editable: false,
                    value: '40',
                }
            },{
                key: '13',
                tar: {
                    value: '东莞（k）',
                },
                jan: {
                    editable: false,
                    value: '41',
                },
                feb: {
                    editable: false,
                    value: '42',
                },
                mar: {
                    editable: false,
                    value: '423',
                },
                apr: {
                    editable: false,
                    value: '34322',
                },
                may: {
                    editable: false,
                    value: '33422',
                },
                jun: {
                    editable: false,
                    value: '3562',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '876',
                },
                ste: {
                    editable: false,
                    value: '324',
                },
                oct: {
                    editable: false,
                    value: '32987',
                },
                nov: {
                    editable: false,
                    value: '0987',
                },
                dev: {
                    editable: false,
                    value: '765',
                }
            },{
                key: '14',
                tar: {
                    value: '广西（k）',
                },
                jan: {
                    editable: false,
                    value: '65',
                },
                feb: {
                    editable: false,
                    value: '3742',
                },
                mar: {
                    editable: false,
                    value: '232',
                },
                apr: {
                    editable: false,
                    value: '832',
                },
                may: {
                    editable: false,
                    value: '932',
                },
                jun: {
                    editable: false,
                    value: '832',
                },
                jul: {
                    editable: false,
                    value: '72',
                },
                aug: {
                    editable: false,
                    value: '6532',
                },
                ste: {
                    editable: false,
                    value: '352',
                },
                oct: {
                    editable: false,
                    value: '3432',
                },
                nov: {
                    editable: false,
                    value: '232',
                },
                dev: {
                    editable: false,
                    value: '632',
                }
            },{
                key: '15',
                tar: {
                    value: '桂林（k）',
                },
                jan: {
                    editable: false,
                    value: '732',
                },
                feb: {
                    editable: false,
                    value: '832',
                },
                mar: {
                    editable: false,
                    value: '732',
                },
                apr: {
                    editable: false,
                    value: '532',
                },
                may: {
                    editable: false,
                    value: '4332',
                },
                jun: {
                    editable: false,
                    value: '332',
                },
                jul: {
                    editable: false,
                    value: '732',
                },
                aug: {
                    editable: false,
                    value: '932',
                },
                ste: {
                    editable: false,
                    value: '832',
                },
                oct: {
                    editable: false,
                    value: '732',
                },
                nov: {
                    editable: false,
                    value: '632',
                },
                dev: {
                    editable: false,
                    value: '532',
                }
            },{
                key: '16',
                tar: {
                    value: '北京（k）',
                },
                jan: {
                    editable: false,
                    value: '432',
                },
                feb: {
                    editable: false,
                    value: '332',
                },
                mar: {
                    editable: false,
                    value: '232',
                },
                apr: {
                    editable: false,
                    value: '132',
                },
                may: {
                    editable: false,
                    value: '732',
                },
                jun: {
                    editable: false,
                    value: '932',
                },
                jul: {
                    editable: false,
                    value: '832',
                },
                aug: {
                    editable: false,
                    value: '732',
                },
                ste: {
                    editable: false,
                    value: '632',
                },
                oct: {
                    editable: false,
                    value: '532',
                },
                nov: {
                    editable: false,
                    value: '432',
                },
                dev: {
                    editable: false,
                    value: '332',
                }
            },{
                key: '17',
                tar: {
                    value: '天津（k）',
                },
                jan: {
                    editable: false,
                    value: '786532',
                },
                feb: {
                    editable: false,
                    value: '37652',
                },
                mar: {
                    editable: false,
                    value: '32654',
                },
                apr: {
                    editable: false,
                    value: '3552',
                },
                may: {
                    editable: false,
                    value: '3255',
                },
                jun: {
                    editable: false,
                    value: '3255',
                },
                jul: {
                    editable: false,
                    value: '3255',
                },
                aug: {
                    editable: false,
                    value: '3332',
                },
                ste: {
                    editable: false,
                    value: '3442',
                },
                oct: {
                    editable: false,
                    value: '3892',
                },
                nov: {
                    editable: false,
                    value: '2332',
                },
                dev: {
                    editable: false,
                    value: '3232',
                }
            },{
                key: '18',
                tar: {
                    value: '河北（k）',
                },
                jan: {
                    editable: false,
                    value: '1232',
                },
                feb: {
                    editable: false,
                    value: '121232',
                },
                mar: {
                    editable: false,
                    value: '31122',
                },
                apr: {
                    editable: false,
                    value: '3222',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '19',
                tar: {
                    value: '辽宁（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '20',
                tar: {
                    value: '成都（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '21',
                tar: {
                    value: '重庆（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '22',
                tar: {
                    value: '云南（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '23',
                tar: {
                    value: '宁夏（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '24',
                tar: {
                    value: '河南（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '25',
                tar: {
                    value: '湖北（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '26',
                tar: {
                    value: '湖南（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '27',
                tar: {
                    value: '江西（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '28',
                tar: {
                    value: '江中（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '29',
                tar: {
                    value: '中江（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '30',
                tar: {
                    value: '江湖（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '31',
                tar: {
                    value: '安徽（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '32',
                }
            },{
                key: '32',
                tar: {
                    value: '西安（k）',
                },
                jan: {
                    editable: false,
                    value: '32',
                },
                feb: {
                    editable: false,
                    value: '32',
                },
                mar: {
                    editable: false,
                    value: '32',
                },
                apr: {
                    editable: false,
                    value: '32',
                },
                may: {
                    editable: false,
                    value: '32',
                },
                jun: {
                    editable: false,
                    value: '32',
                },
                jul: {
                    editable: false,
                    value: '32',
                },
                aug: {
                    editable: false,
                    value: '32',
                },
                ste: {
                    editable: false,
                    value: '32',
                },
                oct: {
                    editable: false,
                    value: '32',
                },
                nov: {
                    editable: false,
                    value: '32',
                },
                dev: {
                    editable: false,
                    value: '3200',
                }
            }],
        };
    }
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (
            <EditableCell
                editable={editable}
                value={text}
                onChange={value => this.handleChange(key, index, value)}
                status={status}
            />
        );
    }
    handleChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }
    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }
    editDone(index, type) {
        const { data } = this.state;
        console.log(data);
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }
    render() {
        const { data } = this.state;
        const dataSource = data.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });
        const columns = this.columns;
        return <Table bordered dataSource={dataSource} columns={columns} />;
    }
}

export default KpiTable;