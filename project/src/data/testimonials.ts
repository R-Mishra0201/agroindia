export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  product: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Punjab, India',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'The wheat seeds from AgriProducts gave me 30% higher yield than previous seasons. Excellent quality and great customer support!',
    product: 'Premium Wheat Seeds'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Maharashtra, India',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'Their organic fertilizers have transformed my soil quality. My vegetables are healthier and more nutritious now.',
    product: 'Organic NPK Fertilizer'
  },
  {
    id: '3',
    name: 'Amit Patel',
    location: 'Gujarat, India',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'The smart irrigation system has reduced my water usage by 40% while increasing crop yield. Highly recommended!',
    product: 'Smart Irrigation System'
  },
  {
    id: '4',
    name: 'Sunita Reddy',
    location: 'Telangana, India',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4,
    comment: 'Great products and prompt delivery. The bio pesticide works effectively without harmful chemicals.',
    product: 'Bio Pesticide'
  }
];