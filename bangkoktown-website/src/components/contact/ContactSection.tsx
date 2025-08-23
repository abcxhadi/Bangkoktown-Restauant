import { motion } from 'framer-motion';
import { Container, Heading2, Heading3, BodyText, ThaiDivider, Card } from '../ui';
import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { InstagramIcon } from '../../assets/icons/InstagramIcon';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';
import { EmailIcon } from '../../assets/icons/EmailIcon';

export const ContactSection = () => {
  const contactInfo = {
    phone: '+971 55 123 4567',
    email: 'info@bangkoktown.ae',
    instagram: '@bangkoktownuae',
    facebook: '@bangkoktownuae',
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20">
      <motion.div
        className="bg-transparent rounded-3xl overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="py-20">
          <Container>
        <ThaiDivider />

        <div className="text-center mb-12">
          <Heading2 className="mb-4">Connect With Us</Heading2>
          <BodyText className="max-w-3xl mx-auto">
            We'd love to hear from you. Whether it's for a reservation, a query, or just to say hello, get in touch with us through any of the channels below.
          </BodyText>
        </div>

        <motion.div
          className="flex flex-col md:flex-row md:justify-around gap-8 mb-16 items-center"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-thai-red mb-2 flex items-center justify-center gap-2">
              <PhoneIcon className="w-6 h-6" />
              Phone
            </h3>
            <a href={`tel:${contactInfo.phone}`} className="text-lg text-gray-700 hover:text-thai-red transition-colors">
              {contactInfo.phone}
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-thai-red mb-2 flex items-center justify-center gap-2">
              <EmailIcon className="w-6 h-6" />
              Email
            </h3>
            <a href={`mailto:${contactInfo.email}`} className="text-lg text-gray-700 hover:text-thai-red transition-colors">
              {contactInfo.email}
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-thai-red mb-2 flex items-center justify-center gap-2">
              <InstagramIcon className="w-6 h-6" />
              Instagram
            </h3>
            <a href="https://instagram.com/bangkoktownuae" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-thai-red transition-colors">
              {contactInfo.instagram}
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-thai-red mb-2 flex items-center justify-center gap-2">
              <FacebookIcon className="w-6 h-6" />
              Facebook
            </h3>
            <a href="https://facebook.com/bangkoktownuae" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-thai-red transition-colors">
              {contactInfo.facebook}
            </a>
          </motion.div>
        </motion.div>

      </Container>
        </div>
      </motion.div>
    </div>
  );
};