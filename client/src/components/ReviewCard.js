import React, { Component } from 'react';
import paradise from '../img/paradise.jpg';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  chip: {
    margin: '0px 4px 18px',
  },
  subheader: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const tilesData = [
  {
    img: paradise,
    title: 'Ao Yon Beach',
  },
]

export default class ReviewCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    }
  }

  handleClick() {
    this.setState({
      like: this.state.like + 1
    })
  }

  render() {

      return (

            <div>
              <Card>
                <CardHeader
                 title="Username"
                 subtitle="Subtitle"
                 avatar={tilesData[0].img}
                 actAsExpander={true}
                 style={{ margin: '-20px 0px' }}
                />
                <CardText >
                  <p>"{this.props.review.content}"</p>
                  <div className="row">
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.stability}
                      </Avatar>
                      Comfort
                    </Chip>
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.aesthetics}
                      </Avatar>
                      Aesthetics
                    </Chip>
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.safety}
                      </Avatar>
                      Safety
                    </Chip>

                    <Chip
                      backgroundColor={'#F8BBD0'}
                      style={styles.chip}
                      onClick={this.handleClick.bind(this)}
                    >
                      <Avatar size={32} color={'#F8BBD0'} backgroundColor={'#EC407A'}>
                        {this.state.like}
                      </Avatar>
                      Likes
                    </Chip>

                  </div>
                </CardText>
              </Card>
            </div>
      );

  }
}
