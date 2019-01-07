import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import PropTypes from 'prop-types';
import profileShape from '../../Helpers/propz/profileShape';
import './profile.scss';

class Profile extends React.Component {
  static propTypes = {
    profile: profileShape,
    commits: PropTypes.number,
  }

  render() {
    const { profile, commits } = this.props;

    return (
      <div className="profile">
        <div>
          <Card>
            <CardImg top width="50%" className='CardImg' src={profile.avatar_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{profile.login}</CardTitle>
              <CardText>{profile.bio}</CardText>
              <CardSubtitle><a href={profile.html_url}>{profile.html_url}</a></CardSubtitle>
              <span className='commitSpan'>
                <h1>{commits}</h1>
                <h3>commits</h3>
                <p>in the last 5 days</p>
              </span>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
