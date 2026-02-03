import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  initialMessage?: string;
}

export function ContactForm({ initialMessage }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: initialMessage || "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Open email client with pre-filled details
    const subject = encodeURIComponent(`Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:info@pegasuspremium.co.za?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Short delay to allow mailto to open, then show success
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-accent" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Message Sent Successfully
        </h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }}
          className="btn-outline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={`input-premium ${errors.name ? "border-destructive ring-destructive" : ""}`}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-sm mt-2"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.co.za"
          className={`input-premium ${errors.email ? "border-destructive ring-destructive" : ""}`}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-sm mt-2"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project requirements..."
          className={`textarea-premium ${errors.message ? "border-destructive ring-destructive" : ""}`}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-sm mt-2"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
          />
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}
