import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as SampleAction from '../../actions/sample'
import Sample from "../../components/sample/sample";
import { toasterMessage } from "../../common/utils";

class sample extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        // toasterMessage("success", "hiii")
        // toasterMessage("error", "hiii")
        this.props.sampleAction('https://jsonplaceholder.typicode.com/todos');
    }

    render() {
        return (
            <div>
                <Sample list={this.props.SampleReducer.list} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        SampleReducer: state.SampleReducer
    }
}

export default connect(
    mapStateToProps,
    { ...SampleAction },
)(sample)
