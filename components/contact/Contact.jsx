"use client";
import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "../Map";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_n4mkhz9";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ugoztxr";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "user_vYmDSd9PwIuRXUQEDjYwN";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState(0);

  const onSubmitEnabled = useMemo(() => !loading && Date.now() > cooldownUntil, [loading, cooldownUntil]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!onSubmitEnabled) return;

    const fd = new FormData(form.current || undefined);
    if ((fd.get("website"))?.trim()) return;

    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      toast.success("Message sent successfully!", { position: "top-right", autoClose: 2400 });
      form.current?.reset();
      setCooldownUntil(Date.now() + 1000 * 20);
    } catch (err) {
      toast.error("Oops, message not sent. Please try again.", { position: "top-right", autoClose: 2600 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact</span>
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>

          <Map />

          <div className="fields">
            <form className="contact_form" id="contactForm" ref={form} onSubmit={sendEmail} noValidate>
              <div className="first">
                <ul style={{ display: "grid", gap: 12 }}>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-label="Your name"
                      required
                      minLength={2}
                      autoComplete="name"
                    />
                  </li>
                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      aria-label="Your email"
                      required
                      inputMode="email"
                      autoComplete="email"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (optional)"
                      aria-label="Subject"
                    />
                  </li>
                  <li>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      aria-label="Phone"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </li>
                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      aria-label="Your message"
                      required
                      minLength={10}
                      rows={5}
                    />
                  </li>
                  <li style={{ display: "none" }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </li>
                </ul>
              </div>

              <div
                className="tokyo_tm_button"
                style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}
              >
                <button
                  type="submit"
                  className="ib-button"
                  disabled={!onSubmitEnabled}
                  style={{
                    opacity: onSubmitEnabled ? 1 : 0.6,
                    cursor: onSubmitEnabled ? "pointer" : "not-allowed",
                    background: "#2563EB",
                    borderColor: "#2563EB",
                    color: 'white'
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {!onSubmitEnabled && (
                  <span style={{ fontSize: 12, color: "#6B7280" }}>
                    Please wait a moment before sending again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
