import React from 'react';
import './projectDisplay.scss';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import blogsShape from '../../Helpers/propz/blogsShape';
import documentationsShape from '../../Helpers/propz/documentationShape';
import podcastsShape from '../../Helpers/propz/podcastsShape';
import tutorialsShape from '../../Helpers/propz/tutorialsShape';
import BlogItem from '../blogItem/blogItem';
import DocItem from '../docItem/docItem';

class projectDisplay extends React.Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(blogsShape),
    documentations: PropTypes.arrayOf(documentationsShape),
    podcasts: PropTypes.arrayOf(podcastsShape),
    tutorials: PropTypes.arrayOf(tutorialsShape),
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { blogs } = this.props;
    const blogItemComponents = blogs.map(blog => (
      <BlogItem
        blog={blog}
        key={blog.id}
        />
    ));

    const { documentations } = this.props;
    const docItemComponents = documentations.map(documentation => (
      <DocItem
        documentation={documentation}
        key={documentation.id}
        />
    ));

    return (
      <div className='projectDisplay'>
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Documentaions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Podcasts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <ul>{blogItemComponents}</ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <ul>{docItemComponents}</ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <h3>podcasts</h3>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <h3>tutorials</h3>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      </div>
    );
  }
}

export default projectDisplay;
