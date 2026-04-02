import {StarRating} from './star-rating';

const Page = () => {
  return (
      <div>
        <StarRating
          maxRating={5}
          size={24}
          defaultRating={3}
        />
      </div>)
}

export default Page;