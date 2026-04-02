'use client';

import { Container } from '../common.styles';
import {StarRating} from './star-rating';

const Page = () => {
  return (
    <Container>
      <StarRating
        maxRating={5}
        size={24}
        defaultRating={3}
      />
    </Container>
  )
}

export default Page;