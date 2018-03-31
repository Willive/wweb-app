import React from 'react'
import { connect } from 'react-redux'
import { eventInfoRequested } from '../../reducer'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import AppContainer from '../AppContainer'
import Attendees from './Attendees'

import './_meetup.css'

const style = {
  margin: 12,
}

class MeetUp extends React.Component {
  constructor() {
    super()
    this.state = {
      yes: [], no: [], waitlisted: [], keyValue: ''
    }
  }

  componentDidMount() {
    this.props.eventInfoRequested()
  }

  componentWillReceiveProps({ attendees }) {
    if (attendees !== this.props.attendees) {
      this.setState({
        all: attendees,
        yes: attendees.filter(el => el.response === 'yes'),
        no: attendees.filter(el => el.response === 'no'),
        waitlisted: attendees.filter(el => el.response === 'waitlist')
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (!this.state.keyValue && prevState.keyValue && this.props.error) {
      this.props.eventInfoRequested()
    }
  }

  onSubmit = () => this.props.eventInfoRequested(this.state.keyValue)

  APIKey = () =>
    <div className="Api">
      <a>Enter Your MeetUp Api Key to Use the Unsigned API Endpoints</a>
      <div className="Api-key">
        <p>Meetup Api Key:</p>
        <TextField hintText="MeetUp Api Key" errorText={this.props.error && 'Invalid Key'}
          onKeyDown={({ keyCode }) => keyCode === 13 && this.state.keyValue && this.onSubmit()}
          onChange={(_, value) => this.setState({ keyValue: value })} style={{ paddingLeft: 8 }} />
        <RaisedButton label="Submit" secondary={true} style={style}
          onClick={this.onSubmit} disabled={!this.state.keyValue} />
      </div>
    </div>

  render() {
    const { state: { yes, no, waitlisted }, props: { attendees }, APIKey } = this
    return (
      <AppContainer SubHeaderChild={() => <h3>MeetUp ReactJS Dallas RSVPS</h3>}>
        <section className="MeetUp" >
          <APIKey />
          <Tabs >
            <Tab label="All">
              <Attendees attendees={attendees} title="All Invites" />
            </Tab>
            <Tab label="Yes" >
              <Attendees attendees={yes} title="People Who Said Yes" />
            </Tab>
            <Tab label="No">
              <Attendees attendees={no} title="People Who Said No" />
            </Tab>
            <Tab label="Waitlisted">
              <Attendees attendees={waitlisted} title="Waitlisted" />
            </Tab>
          </Tabs>
        </section>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({
  attendees: state.attendees,
  error: state.error
})

export default connect(mapStateToProps, { eventInfoRequested })(withRouter(MeetUp))