import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import './profile.scss';

class Profile extends React.Component {
  static PropTypes = {
    profile: PropTypes.objectOf(PropTypes.object),
  }

  render() {
    return (
      <div className="profile">
        <h2>Profile</h2>
        <div>
          <Card>
            <CardImg top width="30%" src="" alt="Card image cap" />
            <CardBody>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
