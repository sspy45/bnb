import React from 'react';
import LocationIndexItem from './location_index_item';
import { asArray } from '../../reducers/selectors';
import Slider from 'react-slick';
class LocationIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.fetchLocations(this.props.filter);
  }

  render(){
    let {filter, locations} = this.props;
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    locations[filter] = locations[filter] || {};
    if(Object.keys(locations[filter]).length !== 0 && locations.constructor === Object){
      locations = asArray(locations[filter]);
      return(
        <section className="categories">
          <h1>locations for {filter}s</h1>
          <secton className="inner-categories">

              {locations.map(local => (
                <LocationIndexItem
                  key={local.id}
                  local={local}
                />
              ))}

          </secton>
        </section>
      );
    } else {
      return (
        <div>Empty</div>
      );
    }
  }
}

export default LocationIndex;
