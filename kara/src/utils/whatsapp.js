/**
 * Generates a pre-filled, URL-encoded WhatsApp message link.
 * 
 * @param {string} type - The type of inquiry (e.g. "Sponsorship", "Stall").
 * @param {string} name - The name of the item (e.g. "Title Sponsor", "Premium Stall (12x12)").
 * @returns {string} The fully constructed WhatsApp API URL.
 */
export const getWhatsAppLink = (type, name) => {
  const text = encodeURIComponent(
    `Hi, I am interested in inquiring about the "${name}" ${type} for KARA Wedding Expo 2026.`
  );
  return `https://wa.me/919642220596?text=${text}`;
};
