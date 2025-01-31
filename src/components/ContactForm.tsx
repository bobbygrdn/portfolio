import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await emailjs.send(
        "service_rzeq1ou",
        "template_jf1c536",
        { name: formData.name, email: formData.email, message: formData.message },
        "hTkPvQSott18YJLGK"
      );
      console.log('EmailJS response:', response);
      setSubmitStatus("success");
      setFormData(INITIAL_DATA);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-zinc-400">
          Name <span className="text-blue-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={`w-full bg-zinc-900/50 border ${errors.name ? "border-red-500/50" : "border-zinc-800"} rounded-lg px-4 py-2.5 text-zinc-100 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-colors`}
          placeholder="John Doe"
        />
        {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-zinc-400">
          Email <span className="text-blue-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full bg-zinc-900/50 border ${errors.email ? "border-red-500/50" : "border-zinc-800"} rounded-lg px-4 py-2.5 text-zinc-100 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-colors`}
          placeholder="john@example.com"
        />
        {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-zinc-400">
          Message <span className="text-blue-400">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className={`w-full bg-zinc-900/50 border ${errors.message ? "border-red-500/50" : "border-zinc-800"} rounded-lg px-4 py-3 text-zinc-100 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-colors min-h-[120px]`}
          placeholder="Tell me about your project..."
        />
        {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting} className="relative group bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border-0 h-12 px-8">
          <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
          <span className="relative flex items-center">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </span>
        </Button>
        {submitStatus === "success" && <span className="text-sm text-green-400">Message sent successfully!</span>}
        {submitStatus === "error" && <span className="text-sm text-red-400">Failed to send message. Please try again.</span>}
      </div>
    </form>
  );
}