import React from 'react';
import './projectDisplay.scss';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
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
    return (
      <div className='projectDisplay'>
        <h2>Project Display</h2>
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
              Moar Tabs
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
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
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
