export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wheat Seeds',
    category: 'Seeds',
    image: 'https://images.pexels.com/photos/236948/pexels-photo-236948.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-yield wheat seeds with excellent disease resistance and drought tolerance.',
    features: ['High germination rate', 'Disease resistant', 'Drought tolerant', 'Premium quality']
  },
  {
    id: '2',
    name: 'Organic NPK Fertilizer',
    category: 'Fertilizers',
    image: 'https://images.pexels.com/photos/4503285/pexels-photo-4503285.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete organic fertilizer with balanced NPK ratio for healthy crop growth.',
    features: ['100% organic', 'Slow release formula', 'Improves soil health', 'Eco-friendly']
  },
  {
    id: '3',
    name: 'Smart Irrigation System',
    category: 'Equipment',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Automated drip irrigation system with smart water management technology.',
    features: ['Water efficient', 'Smart controls', 'Easy installation', 'Remote monitoring']
  },
  {
    id: '4',
    name: 'Bio Pesticide',
    category: 'Organic Products',
    image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Natural pesticide derived from plant extracts, safe for crops and environment.',
    features: ['Chemical-free', 'Safe for crops', 'Biodegradable', 'Effective protection']
  },
  {
    id: '5',
    name: 'Hybrid Corn Seeds',
    category: 'Seeds',
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-performing hybrid corn seeds with superior yield potential.',
    features: ['Hybrid variety', 'High yield', 'Weather resistant', 'Fast growth']
  },
  {
    id: '6',
    name: 'Soil Conditioner',
    category: 'Fertilizers',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Improves soil structure and water retention for better crop performance.',
    features: ['Improves soil structure', 'Water retention', 'pH balanced', 'Long lasting']
  },
  {
    id: '7',
    name: 'Solar Water Pump',
    category: 'Equipment',
    image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Efficient solar-powered water pump system for sustainable irrigation.',
    features: ['Solar powered', 'Energy efficient', 'Low maintenance', 'Durable design']
  },
  {
    id: '8',
    name: 'Organic Compost',
    category: 'Organic Products',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rich organic compost made from natural materials to enhance soil fertility.',
    features: ['100% natural', 'Rich in nutrients', 'Improves soil health', 'Sustainable']
  }
];