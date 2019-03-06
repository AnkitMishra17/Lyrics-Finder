import React, {Component} from 'react';
import {Context} from '../../Context';
import Loading from '../Layouts/Spinner';
import Track from '../Tracks/Track';

 class Tracks extends Component {
   render(){
     return(
       <Context.Consumer>
          {value =>{
            //console.log(value);
            const {track_list,heading} = value;

            if (track_list === undefined || track_list.length === 0) {
                return <Loading/>
            }else {
              return(
                <React.Fragment>
                  <h3 className="display-3 mb-4 text-center">{heading}</h3>
                   <div className="row">
                      {track_list.map(item =>(
                        <Track key={item.track.track_id} track={item.track}/>
                      ))}
                   </div>
                </React.Fragment>
              )
            }
          }}
       </Context.Consumer>
     );
  }
}

 export default Tracks;
