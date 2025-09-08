import { WHATSAPP_NUMBER } from '../utils/constants';

export const useWhatsApp = () => {
  const sendMessage = (category: string, description: string) => {
    const message = `Hello, I am interested in ${category}. Details: ${description}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendGeneralMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return { sendMessage, sendGeneralMessage };
};