import React, { Component } from 'react';
import '../css/mouldifi-core.css';
import { Link } from 'react-router-dom';
import '../css/App.css';

class SideBar extends Component {
  render() {
      return (
        <div id="pageSidebar" className="page-sidebar">
            <div className="sidebar-fixed ps-container ps-theme-default" style={{'backgroundColor':'black'}}>
                <header className="site-header" style={{'backgroundColor':'#595959'}}>
                </header>
                <ul id="side-nav" className="main-menu navbar-collapse collapse">
                    <li>
                        <Link to='/flights' className="link-sidebar"><span className="title">Flights list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/add_flight' className="link-sidebar"><span className="title">Add new flight</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}
export default SideBar;
