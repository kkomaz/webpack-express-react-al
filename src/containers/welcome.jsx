import React, { Component } from 'react';
import DesktopBreakpoint from '../components/responsive_utilities/desktop_breakpoint';
import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';
import TabletBreakpoint from '../components/responsive_utilities/tablet_breakpoint';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-page">
        <DesktopBreakpoint>
          <h3>Hello Desktop!</h3>
        </DesktopBreakpoint>

        <PhoneBreakpoint>
          <h3>Hello phone!</h3>
        </PhoneBreakpoint>

        <TabletBreakpoint>
          <h3>Hello tablet!</h3>
        </TabletBreakpoint>

        <h1>This is the Welcome Page!</h1>
      </div>
    );
  }
}
