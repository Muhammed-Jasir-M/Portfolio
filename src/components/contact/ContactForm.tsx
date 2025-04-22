import { Input } from "@/components/ui/input";
import { services } from "@/constants/services";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setSubmitStatus({
        success: data.success,
        message: data.message,
      });

      if (data.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="lg:w-[54%] order-2 lg:order-none px-2.5 lg:px-0">
      <form
        className="flex flex-col gap-6 p-6 lg:p-10 bg-primary-foreground rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-4xl text-accent leading-relaxed">
          Let&apos;s Work Together
        </h3>

        <p className="text-white/60">
          Feel free to reach out to me for collaborations, projects, or any
          inquiries. I&apos;ll get back to you as soon as possible!
        </p>

        {submitStatus && (
          <div
            className={`p-3 rounded-md ${
              submitStatus.success
                ? "bg-green-600/20 text-green-400"
                : "bg-red-600/20 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Firstname"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />

          <Input
            type="text"
            placeholder="Lastname"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />

          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />

          <Input
            type="tel"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger className="w-full h-[50px] border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="border-white/10 bg-primary text-white z-50 py-2 px-2"
          >
            <SelectGroup>
              {services.map((service, index) => (
                <SelectItem
                  key={index}
                  value={service.value}
                  className="focus:text-primary focus:bg-accent px-2 lg:px-4 py-1.5"
                >
                  {service.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          className="h-[200px]"
          placeholder="Type your message here."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <div className="flex justify-center">
          <Button
            size="sm"
            className="w-full lg:max-w-60 cursor-pointer"
            variant="default"
            disabled={isSubmitting || submitStatus?.success === false}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
