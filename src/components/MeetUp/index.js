import React from 'react';
import { connect } from 'react-redux';
import { eventInfoRequested } from '../../reducer'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui/Tabs';
import Attendees from './Attendees'
import './_meetup.css'

class MeetUp extends React.Component {
  constructor() {
    super()
    this.state = {
      yes: [], no: [], waitlisted: []
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

  render() {
    const { state: { yes, no, waitlisted }, props: { attendees } } = this
    return (
      <section className="MeetUp" >
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
    )
  }
}

const mapStateToProps = state => ({
  attendees: state.attendees,
  error: state.error
})

export default connect(mapStateToProps, { eventInfoRequested })(withRouter(MeetUp))