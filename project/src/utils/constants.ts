export const WHATSAPP_NUMBER = '1234567890'; // Replace with actual WhatsApp number

export const PRODUCT_CATEGORIES = [
  'Seeds',
  'Fertilizers', 
  'Equipment',
  'Organic Products',
  'Others'
] as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const HERO_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Agricultural Products',
    subtitle: 'Quality solutions for modern farming'
  },
  {
    url: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sustainable Farming Solutions',
    subtitle: 'Grow better with our organic products'
  },
  {
    url: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Advanced Equipment & Technology',
    subtitle: 'Modernize your agricultural operations'
  }
] as const;