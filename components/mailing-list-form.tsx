"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function MailingListForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: String(formData.get("email") ?? ""),
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
    };

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "We could not add you right now. Please try again later.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("We could not add you right now. Please try again later.");
    }
  }

  return (
    <form className="mailing-list-form" onSubmit={handleSubmit}>
      <div className="mailing-list-grid">
        <div className="mailing-list-field">
          <label htmlFor="mailing-first-name">First Name</label>
          <input
            autoComplete="given-name"
            id="mailing-first-name"
            name="firstName"
            placeholder="First name"
            required
            type="text"
          />
        </div>
        <div className="mailing-list-field">
          <label htmlFor="mailing-last-name">Last Name</label>
          <input
            autoComplete="family-name"
            id="mailing-last-name"
            name="lastName"
            placeholder="Last name"
            required
            type="text"
          />
        </div>
        <div className="mailing-list-field">
          <label htmlFor="mailing-email">Email</label>
          <input
            autoComplete="email"
            id="mailing-email"
            name="email"
            placeholder="Email address"
            required
            type="email"
          />
        </div>
        <div className="mailing-list-field">
          <label htmlFor="mailing-phone">
            Phone <span>Optional</span>
          </label>
          <input
            autoComplete="tel"
            id="mailing-phone"
            name="phone"
            placeholder="Phone number"
            type="tel"
          />
        </div>
      </div>
      <div className="mailing-list-actions">
        <button className="btn-primary mailing-list-submit" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Submitting..." : "Join Our Mailing List"}
        </button>
        {status === "success" ? (
          <p className="mailing-list-message success">Thank you. We&apos;ll keep you informed.</p>
        ) : null}
        {status === "error" ? <p className="mailing-list-message error">{error}</p> : null}
      </div>
    </form>
  );
}
