import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_7gyttxk';
const TEMPLATE_ID = 'template_sb0d1uc';
const PUBLIC_KEY = 'loVpT_rUdMucCi1r0';

export const sendEmail = async (email, message) => {
  try {
    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);
    console.log('Sent detatils: ', {
      email,
      message,
    });

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: email.toString().split('@')[0],
        from_email: email,
        message_html: message,
      }
    );
    return { success: true, data: response };
    // return;
  } catch (error) {
    console.error('EmailJS error:', error);
    console.log('EmailJS error:', error);
    return { success: false, error };
  }
};
