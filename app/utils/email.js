import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_7gyttxk';
const TEMPLATE_ID = 'template_sb0d1uc';
const PUBLIC_KEY = 'loVpT_rUdMucCi1r0';

// Simple HTML email template generator
function generateEmailTemplate({ sender, email, message }) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e0e0e0;">
        
        <!-- Header with Logo -->
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
          <img src="https://yourdomain.com/favicon.svg" alt="Portfolio Logo" style="height: 32px; margin-bottom: 8px;" />
        </div>
    
        <!-- Content -->
        <div style="padding: 24px;">
          <h2 style="color: #222;">New Message from Portfolio Contact</h2>
          <p style="color: #555;"><strong>From:</strong> ${sender} &lt;${email}&gt;</p>
    
          <div style="background-color: #fafafa; padding: 16px; margin-top: 16px; border-left: 4px solid #4caf50; color: #333; line-height: 1.5;">
            ${message}
          </div>
    
          <p style="font-size: 12px; color: #999; margin-top: 24px;">This message was sent via your portfolio contact form.</p>
        </div>
      </div>
    </div>
  `;
}

export const sendEmail = async (email, message, sender = null) => {
  try {
    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);
    console.log('Sent detatils: ', {
      email,
      message,
      sender,
    });

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: sender || email.toString().split('@')[0],
        from_email: email,
        message_html: generateEmailTemplate({ sender: sender || email.toString().split('@')[0], email, message }),
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
