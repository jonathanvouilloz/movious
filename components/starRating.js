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
              className="mx-3 focus:outline-none"
              onClick={() => {getNote(index+1), setRating(index)}}
              onMouseEnter={() => setRating(index)}
              onMouseLeave={() => {getNote(index+1), setHover(-1)}}
            > {rating < index ? <StarOutlined style={{color:'#753742'}}/> : <StarFilled style={{color:'#753742'}} />}
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating