import {useState} from 'react'
import {StarOutlined, StarFilled} from '@ant-design/icons'


const StarRating = ({getNote}) => {

    const [hover, setHover] = useState(-1);
    const [rating, setRating] = useState(-1);

    return (
      <div className="star-rating">
        {[...Array(10)].map((star, index) => {
          return (
            <button
              type="button"
              key={index}
              className="lg:mx-5 md:mx-2 focus:outline-none mx-1"
              onClick={() => {getNote(index+1), setRating(index)}}
              onMouseEnter={() => setRating(index)}
              onMouseLeave={() => {getNote(index+1), setHover(-1)}}
            > {rating < index ? <StarOutlined style={{color:'#721817'}}/> : <StarFilled style={{color:'#721817'}} />}
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating