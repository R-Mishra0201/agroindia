import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '../UI/Button';
import { PRODUCT_CATEGORIES } from '../../utils/constants';
import { useWhatsApp } from '../../hooks/useWhatsApp';

interface QueryFormProps {
  initialCategory?: string;
  onClose?: () => void;
}

export const QueryForm: React.FC<QueryFormProps> = ({ initialCategory = '', onClose }) => {
  const [category, setCategory] = useState(initialCategory);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendMessage } = useWhatsApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !description.trim()) return;

    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    sendMessage(category, description);
    
    // Reset form
    setCategory('');
    setDescription('');
    setIsSubmitting(false);
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Product Category *
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select a category</option>
          {PRODUCT_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Product Description & Requirements *
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please describe the product you're looking for, quantity needed, and any specific requirements..."
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={!category || !description.trim() || isSubmitting}
        className="w-full flex items-center justify-center space-x-2"
      >
        <Send size={20} />
        <span>{isSubmitting ? 'Sending...' : 'Send WhatsApp Message'}</span>
      </Button>

      <p className="text-xs text-gray-500 text-center">
        This will redirect you to WhatsApp with a pre-filled message containing your inquiry.
      </p>
    </motion.form>
  );
};