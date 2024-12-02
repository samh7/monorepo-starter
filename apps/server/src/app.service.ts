import { Injectable } from '@nestjs/common';

export interface props {
  name: string;
  caption: string;
}

const locations: props[] = [
  {
    name: 'Paris, France',
    caption:
      'Experience the magic of the Eiffel Tower and savor world-class cuisine in the City of Light.',
  },
  {
    name: 'Kyoto, Japan',
    caption:
      'Step back in time with serene temples, bamboo forests, and vibrant geisha districts.',
  },
  {
    name: 'New York City, USA',
    caption:
      'Explore the bustling streets, iconic landmarks, and endless cultural attractions of the Big Apple.',
  },
  {
    name: 'Cape Town, South Africa',
    caption:
      'Discover stunning landscapes, Table Mountain, and vibrant cultures at the southern tip of Africa.',
  },
  {
    name: 'Sydney, Australia',
    caption:
      'Marvel at the Sydney Opera House and Harbor Bridge while enjoying beautiful beaches.',
  },
  {
    name: 'Rome, Italy',
    caption:
      'Walk through history in the Eternal City, home to the Colosseum and breathtaking art.',
  },
  {
    name: 'Rio de Janeiro, Brazil',
    caption:
      'Embrace the rhythm of samba, pristine beaches, and the iconic Christ the Redeemer statue.',
  },
  {
    name: 'Cairo, Egypt',
    caption:
      'Unearth ancient wonders with a visit to the Great Pyramids and the Sphinx.',
  },
  {
    name: 'Santorini, Greece',
    caption:
      'Soak in breathtaking sunsets and iconic white-washed buildings overlooking the Aegean Sea.',
  },
  {
    name: 'Banff, Canada',
    caption:
      'Immerse yourself in the natural beauty of turquoise lakes and rugged mountain peaks.',
  },
];

@Injectable()
export class AppService {
  getFeed(): props[] {
    return locations;
  }
}
