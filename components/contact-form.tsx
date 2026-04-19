"use client";

import { FormEvent, useState } from "react";

import { contactCategoryOptions, contactRoleOptions } from "@/lib/site-data";

type ContactFormState = {
  categories: string[];
  company: string;
  email: string;
  location: string;
  message: string;
  name: string;
  phone: string;
  role: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  role: "",
  location: "",
  categories: [],
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setErrorMessage(payload.error ?? "We could not send your message right now.");
        return;
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("We could not send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          placeholder="Full name"
          required
          type="text"
          value={form.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          placeholder="your@email.com"
          required
          type="email"
          value={form.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          name="phone"
          onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          placeholder="Best number to reach you"
          type="tel"
          value={form.phone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Your Role</label>
        <select
          id="role"
          name="role"
          onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
          value={form.role}
        >
          <option value="">Select one</option>
          {contactRoleOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Estate Location</label>
        <input
          id="location"
          name="location"
          onChange={(event) =>
            setForm((current) => ({ ...current, location: event.target.value }))
          }
          placeholder="City / neighborhood"
          type="text"
          value={form.location}
        />
      </div>
      <div className="form-group">
        <label htmlFor="categories">Categories Present (check all that apply)</label>
        <div className="contact-category-grid" id="categories">
          {contactCategoryOptions.map((option) => {
            const checked = form.categories.includes(option.value);
            return (
              <label className="contact-check-label" key={option.value}>
                <input
                  checked={checked}
                  name="categories"
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      categories: event.target.checked
                        ? [...current.categories, option.value]
                        : current.categories.filter((value) => value !== option.value),
                    }))
                  }
                  type="checkbox"
                  value={option.value}
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Brief Description of the Estate</label>
        <textarea
          id="message"
          name="message"
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="A few sentences about what you're working with and your timeline is all we need to start."
          value={form.message}
        />
      </div>
      <div className="contact-honeypot">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          autoComplete="off"
          name="company"
          onChange={(event) =>
            setForm((current) => ({ ...current, company: event.target.value }))
          }
          tabIndex={-1}
          type="text"
          value={form.company}
        />
      </div>
      <button
        className="btn-primary contact-submit"
        disabled={isSubmitting}
        style={{ border: "none", cursor: "pointer", width: "100%", textAlign: "center" }}
        type="submit"
      >
        {isSubmitting ? "Sending Consultation Request..." : "Send Consultation Request"}
      </button>
      <p
        aria-live="polite"
        className={`contact-form-status${
          status === "success"
            ? " contact-form-status-success"
            : status === "error"
              ? " contact-form-status-error"
              : ""
        }`}
        role={status === "error" ? "alert" : undefined}
      >
        {status === "success"
          ? "Your consultation request was sent. Bill will follow up directly."
          : status === "error"
            ? errorMessage
            : " "}
      </p>
    </form>
  );
}

