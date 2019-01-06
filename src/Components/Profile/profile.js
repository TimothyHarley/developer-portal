import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import profileShape from '../../Helpers/propz/profileShape';
import './profile.scss';

class Profile extends React.Component {
  static propTypes = {
    profile: profileShape,
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
