// components/Contact/index.tsx

"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ugauc93";

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_5prg4mn";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "bEkDwHTfe-uaxKGlf";

const CONTACT_SIGNALS = [
  {
    icon: BriefcaseBusiness,
    label: "Best fit",
    value: "AI SEO, technical SEO, full-stack systems, strategic web builds",
  },
  {
    icon: MapPin,
    label: "Market focus",
    value: "Dubai, UAE, Saudi Arabia, Gulf region, and global enterprise clients",
  },
  {
    icon: Clock3,
    label: "Response window",
    value: "Usually within 24–48 hours for serious opportunities",
  },
];

const PROJECT_TYPES = [
  "Strategic Collaboration",
  "AI SEO / GEO Consulting",
  "Technical SEO Audit",
  "Full-Stack Web Project",
  "Executive / Founder Inquiry",
  "Speaking / Podcast / Interview",
  "Other",
];

const Contact = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    projectType: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldMap = {
      user_name: "name",
      user_email: "email",
      project_type: "projectType",
      message: "message",
    };

    setFormData((prev) => ({
      ...prev,
      [fieldMap[name] || name]: value,
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(
            "Message received. I’ll review it and respond with context soon.",
            {
              position: "top-right",
              autoClose: 5200,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            }
          );

          setFormData({
            name: "",
            email: "",
            projectType: "",
            message: "",
          });
        },
        (error) => {
          console.error(error?.text || error);

          toast.error(
            "Something went wrong while sending your message. Please try again.",
            {
              position: "top-right",
              autoClose: 5200,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            }
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main className="smc-section">
      <div className="smc-grid-bg" aria-hidden="true" />
      <div className="smc-orb smc-orb--left" aria-hidden="true" />
      <div className="smc-orb smc-orb--right" aria-hidden="true" />

      <div className="smc-container">
        <section className="smc-hero" aria-labelledby="contact-title">
          <div>
            <div className="smc-kicker">
              <span />
              Strategic Contact
            </div>

            <h1 id="contact-title">
              Let’s discuss high-value digital systems, search authority, and
              execution.
            </h1>

            <p>
              Use this page for serious collaboration, premium web systems, AI
              SEO strategy, technical SEO architecture, founder-level digital
              direction, or opportunities aligned with long-term authority.
            </p>
          </div>

          <div className="smc-hero-card" aria-label="Contact positioning">
            <div className="smc-hero-card-top">
              <Sparkles size={17} strokeWidth={2.3} />
              Sufian Mustafa
            </div>

            <strong>Systems Engineer · Technical SEO Architect</strong>

            <p>
              Building executive-grade digital assets through full-stack
              engineering, AI search visibility, and authority-first technical
              strategy.
            </p>
          </div>
        </section>

        <section className="smc-layout" aria-label="Contact form and details">
          <div className="smc-form-card">
            <div className="smc-card-head">
              <div className="smc-icon-box">
                <MessageCircle size={24} strokeWidth={2.25} />
              </div>

              <div>
                <span>Start the conversation</span>
                <h2>Send a strategic inquiry</h2>
                <p>
                  Share the context, goal, or opportunity. The clearer the
                  message, the better the response.
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="smc-form">
              <input
                type="hidden"
                name="website_context"
                value="sufianmustafa.com contact page"
              />
              <input
                type="hidden"
                name="recipient_name"
                value="Sufian Mustafa"
              />

              <div className="smc-field-grid">
                <div className="smc-field">
                  <label
                    htmlFor="name"
                    className={
                      focusedFields.name || formData.name ? "is-active" : ""
                    }
                  >
                    Your Name *
                  </label>

                  <div className="smc-input-shell">
                    <User size={16} strokeWidth={2.25} />
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      required
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="smc-field">
                  <label
                    htmlFor="email"
                    className={
                      focusedFields.email || formData.email ? "is-active" : ""
                    }
                  >
                    Your Email *
                  </label>

                  <div className="smc-input-shell">
                    <Mail size={16} strokeWidth={2.25} />
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
              </div>

              <div className="smc-field">
                <label
                  htmlFor="project_type"
                  className={
                    focusedFields.projectType || formData.projectType
                      ? "is-active"
                      : ""
                  }
                >
                  Inquiry Type
                </label>

                <div className="smc-input-shell smc-select-shell">
                  <BriefcaseBusiness size={16} strokeWidth={2.25} />

                  <select
                    id="project_type"
                    name="project_type"
                    value={formData.projectType}
                    onChange={handleChange}
                    onFocus={() => handleFocus("projectType")}
                    onBlur={() => handleBlur("projectType")}
                  >
                    <option value="">Select inquiry type</option>
                    {PROJECT_TYPES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="smc-field">
                <label
                  htmlFor="message"
                  className={
                    focusedFields.message || formData.message ? "is-active" : ""
                  }
                >
                  Your Message *
                </label>

                <div className="smc-input-shell smc-textarea-shell">
                  <MessageCircle size={16} strokeWidth={2.25} />

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    required
                    placeholder="Briefly explain the opportunity, project, technical issue, collaboration idea, or strategic goal..."
                  />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="smc-submit">
                <span>
                  {isSubmitting ? (
                    <>
                      <i className="smc-spinner" aria-hidden="true" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Strategic Inquiry
                      <Send size={17} strokeWidth={2.35} />
                    </>
                  )}
                </span>
              </button>

              <div className="smc-form-note">
                <ShieldCheck size={15} strokeWidth={2.35} />
                Your email stays private. No spam, no public publishing, no
                unnecessary follow-up.
              </div>
            </form>
          </div>

          <aside className="smc-side-panel" aria-label="Contact details">
            <div className="smc-side-top">
              <div className="smc-avatar-mark">SM</div>

              <div>
                <span>Authority-first contact</span>
                <h3>For serious professional conversations.</h3>
              </div>
            </div>

            <p className="smc-side-copy">
              This contact channel is designed for high-intent opportunities:
              strategic consulting, technical collaboration, premium web
              architecture, AI visibility, and executive-level digital systems.
            </p>

            <div className="smc-signal-list">
              {CONTACT_SIGNALS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="smc-signal">
                    <div>
                      <Icon size={17} strokeWidth={2.35} />
                    </div>

                    <section>
                      <span>{item.label}</span>
                      <p>{item.value}</p>
                    </section>
                  </div>
                );
              })}
            </div>

            <div className="smc-direct-card">
              <span>Direct email</span>

              <a href="mailto:doitwithaitools@gmail.com">
                doitwithaitools@gmail.com
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </a>
            </div>

            <div className="smc-readiness">
              <CheckCircle2 size={17} strokeWidth={2.35} />
              Available for selective strategic conversations.
            </div>
          </aside>
        </section>
      </div>

      <ToastContainer newestOnTop pauseOnFocusLoss draggable pauseOnHover />

      <style jsx global>{`
        .smc-section {
          --smc-gold: #e3b341;
          --smc-gold-deep: #c9952c;
          --smc-gold-soft: #f2cc6b;
          --smc-ink: #ede9dc;
          --smc-ink-strong: #f7f1df;
          --smc-accent-ink: #2e2106;

          position: relative;
          min-height: ;
          overflow: hidden;
          color: var(--smc-ink);
          background:
            radial-gradient(
              760px 430px at 16% 0%,
              rgba(227, 179, 65, 0.15),
              transparent 66%
            ),
            radial-gradient(
              620px 360px at 88% 8%,
              rgba(82, 113, 255, 0.07),
              transparent 70%
            ),
            linear-gradient(180deg, #050a18 0%, #071020 45%, #02050d 100%);
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .smc-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.1;
          background-image:
            linear-gradient(rgba(242, 204, 107, 0.12) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(242, 204, 107, 0.12) 1px,
              transparent 1px
            );
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black 0%, transparent 76%);
        }

        .smc-orb {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(110px);
        }

        .smc-orb--left {
          left: -180px;
          top: 0px;
          width: 420px;
          height: 0px;
          background: rgba(227, 179, 65, 0.13);
        }

        .smc-orb--right {
          right: -170px;
          bottom: 160px;
          width: 390px;
          height: 390px;
          background: rgba(201, 149, 44, 0.09);
        }

        .smc-container {
          position: relative;
          z-index: 2;
          width: min(100% - 32px, 1240px);
          margin: 0 auto;
          padding: clamp(72px, 8vw, 112px) 0 clamp(84px, 9vw, 132px);
        }

        .smc-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.22fr) minmax(310px, 0.78fr);
          gap: clamp(28px, 5vw, 70px);
          align-items: end;
          margin-bottom: clamp(34px, 5vw, 62px);
        }

        .smc-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 20px;
          color: var(--smc-gold-soft);
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .smc-kicker span {
          width: 28px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--smc-gold-deep),
            var(--smc-gold-soft)
          );
          box-shadow: 0 0 18px rgba(227, 179, 65, 0.48);
        }

       .smc-hero h1 {
  max-width: 820px;
  margin: 0;
  color: var(--smc-ink-strong);
  font-size: clamp(2.15rem, 4.4vw, 4.65rem);
  font-weight: 950;
  line-height: 1.02;
  letter-spacing: -0.06em;
}

        .smc-hero p {
          max-width: 760px;
          margin: 24px 0 0;
          color: rgba(237, 233, 220, 0.64);
          font-size: clamp(1rem, 1.55vw, 1.16rem);
          font-weight: 560;
          line-height: 1.76;
          letter-spacing: -0.018em;
        }

        .smc-hero-card,
        .smc-form-card,
        .smc-side-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background:
            radial-gradient(
              440px 220px at 18% 0%,
              rgba(227, 179, 65, 0.1),
              transparent 70%
            ),
            rgba(7, 16, 32, 0.72);
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(22px);
        }

        .smc-hero-card {
          border-radius: 30px;
          padding: 24px;
        }

        .smc-hero-card::before,
        .smc-form-card::before,
        .smc-side-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.56),
            transparent
          );
        }

        .smc-hero-card-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--smc-gold-soft);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .smc-hero-card-top svg {
          color: var(--smc-gold);
        }

        .smc-hero-card strong {
          display: block;
          margin-top: 18px;
          color: var(--smc-ink-strong);
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          font-weight: 920;
          line-height: 1.1;
          letter-spacing: -0.045em;
        }

        .smc-hero-card p {
          margin-top: 14px;
          color: rgba(237, 233, 220, 0.56);
          font-size: 13.5px;
          line-height: 1.72;
        }

        .smc-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr);
          gap: 22px;
          align-items: start;
        }

        .smc-form-card,
        .smc-side-panel {
          border-radius: 34px;
        }

        .smc-form-card {
          padding: clamp(22px, 3vw, 34px);
        }

        .smc-side-panel {
          padding: 28px;
        }

        .smc-card-head {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .smc-icon-box {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          flex: 0 0 58px;
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.24);
          background: rgba(227, 179, 65, 0.095);
          color: var(--smc-gold-soft);
          box-shadow: 0 18px 44px rgba(227, 179, 65, 0.08);
        }

        .smc-card-head span,
        .smc-side-top span,
        .smc-direct-card span {
          display: block;
          margin-bottom: 7px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 10.5px;
          font-weight: 850;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .smc-card-head h2,
        .smc-side-top h3 {
          margin: 0;
          color: var(--smc-ink-strong);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .smc-card-head h2 {
          font-size: clamp(1.65rem, 3vw, 2.35rem);
        }

        .smc-card-head p {
          max-width: 620px;
          margin: 10px 0 0;
          color: rgba(237, 233, 220, 0.56);
          font-size: 13.5px;
          font-weight: 560;
          line-height: 1.7;
        }

        .smc-form {
          display: grid;
          gap: 18px;
        }

        .smc-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .smc-field {
          position: relative;
          display: grid;
          gap: 9px;
        }

        .smc-field label {
          color: rgba(237, 233, 220, 0.52);
          font-size: 12px;
          font-weight: 760;
          line-height: 1;
          transition: color 180ms ease;
        }

        .smc-field label.is-active {
          color: var(--smc-gold-soft);
        }

        .smc-input-shell {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 54px;
          border-radius: 18px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(3, 7, 16, 0.36);
          padding: 0 15px;
          color: var(--smc-gold);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .smc-input-shell:focus-within {
          border-color: rgba(227, 179, 65, 0.42);
          background: rgba(3, 7, 16, 0.5);
          box-shadow:
            0 0 0 4px rgba(227, 179, 65, 0.075),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .smc-input-shell svg {
          flex: 0 0 auto;
          color: var(--smc-gold);
        }

        .smc-input-shell input,
        .smc-input-shell select,
        .smc-input-shell textarea {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--smc-ink-strong);
          font: inherit;
          font-size: 14px;
          font-weight: 600;
        }

        .smc-input-shell input {
          height: 52px;
        }

        .smc-input-shell select {
          height: 52px;
          cursor: pointer;
        }

        .smc-input-shell select option {
          background: #071020;
          color: var(--smc-ink-strong);
        }

        .smc-textarea-shell {
          align-items: flex-start;
          padding-top: 15px;
          padding-bottom: 15px;
        }

        .smc-textarea-shell textarea {
          min-height: 148px;
          resize: vertical;
          line-height: 1.65;
        }

        .smc-input-shell textarea::placeholder {
          color: rgba(237, 233, 220, 0.34);
        }

        .smc-submit {
          position: relative;
          overflow: hidden;
          min-height: 54px;
          width: 100%;
          border: 0;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            var(--smc-gold-soft),
            var(--smc-gold),
            var(--smc-gold-deep)
          );
          color: var(--smc-accent-ink);
          font-size: 14px;
          font-weight: 950;
          line-height: 1;
          cursor: pointer;
          box-shadow:
            0 18px 46px rgba(227, 179, 65, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.24);
          transition:
            transform 180ms ease,
            filter 180ms ease,
            box-shadow 180ms ease;
        }

        .smc-submit span {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }

        .smc-submit::after {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.3) 48%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition:
            transform 700ms ease,
            opacity 180ms ease;
        }

        .smc-submit:hover:not(:disabled),
        .smc-submit:focus-visible:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.04);
          box-shadow:
            0 24px 62px rgba(227, 179, 65, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.28);
          outline: none;
        }

        .smc-submit:hover::after,
        .smc-submit:focus-visible::after {
          opacity: 1;
          transform: translateX(100%);
        }

        .smc-submit:disabled {
          cursor: not-allowed;
          opacity: 0.64;
        }

        .smc-spinner {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          border: 2px solid rgba(46, 33, 6, 0.25);
          border-top-color: var(--smc-accent-ink);
          animation: smcSpin 720ms linear infinite;
        }

        .smc-form-note {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(237, 233, 220, 0.45);
          font-size: 12px;
          font-weight: 560;
          line-height: 1.55;
        }

        .smc-form-note svg {
          flex: 0 0 auto;
          color: var(--smc-gold);
        }

        .smc-side-top {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .smc-avatar-mark {
          display: grid;
          place-items: center;
          width: 62px;
          height: 62px;
          flex: 0 0 62px;
          border-radius: 22px;
          border: 1px solid rgba(227, 179, 65, 0.3);
          background: linear-gradient(
            135deg,
            rgba(242, 204, 107, 0.18),
            rgba(227, 179, 65, 0.08)
          );
          color: var(--smc-gold-soft);
          font-size: 17px;
          font-weight: 950;
          letter-spacing: -0.08em;
          box-shadow: 0 20px 50px rgba(227, 179, 65, 0.08);
        }

        .smc-side-top h3 {
          font-size: clamp(1.35rem, 2vw, 1.78rem);
        }

        .smc-side-copy {
          margin: 0;
          color: rgba(237, 233, 220, 0.6);
          font-size: 13.5px;
          font-weight: 560;
          line-height: 1.75;
        }

        .smc-signal-list {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .smc-signal {
          display: flex;
          gap: 12px;
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.11);
          background: rgba(255, 255, 255, 0.028);
          padding: 14px;
        }

        .smc-signal > div {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          border-radius: 14px;
          background: rgba(227, 179, 65, 0.085);
          color: var(--smc-gold-soft);
        }

        .smc-signal span {
          display: block;
          color: var(--smc-ink-strong);
          font-size: 12px;
          font-weight: 850;
          line-height: 1.2;
        }

        .smc-signal p {
          margin: 5px 0 0;
          color: rgba(237, 233, 220, 0.52);
          font-size: 12.5px;
          font-weight: 560;
          line-height: 1.55;
        }

        .smc-direct-card {
          margin-top: 20px;
          border-radius: 22px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.055);
          padding: 16px;
        }

        .smc-direct-card a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          max-width: 100%;
          color: var(--smc-gold-soft);
          font-size: 14px;
          font-weight: 820;
          line-height: 1.3;
          text-decoration: none;
          word-break: break-word;
          transition: color 180ms ease;
        }

        .smc-direct-card a:hover {
          color: #fff4c7;
        }

        .smc-direct-card svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .smc-direct-card a:hover svg {
          transform: translate(2px, -2px);
        }

        .smc-readiness {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          color: rgba(237, 233, 220, 0.64);
          font-size: 12.5px;
          font-weight: 680;
          line-height: 1.55;
        }

        .smc-readiness svg {
          flex: 0 0 auto;
          color: #22c55e;
        }

        .Toastify__toast {
          border-radius: 16px !important;
          border: 1px solid rgba(227, 179, 65, 0.18) !important;
          background:
            radial-gradient(
              240px 120px at 10% 0%,
              rgba(227, 179, 65, 0.14),
              transparent 70%
            ),
            #071020 !important;
          color: #f7f1df !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.36) !important;
        }

        .Toastify__progress-bar {
          background: linear-gradient(
            90deg,
            var(--smc-gold-deep),
            var(--smc-gold),
            var(--smc-gold-soft)
          ) !important;
        }

        @keyframes smcSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 980px) {
          .smc-hero,
          .smc-layout {
            grid-template-columns: 1fr;
          }

          .smc-side-panel {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .smc-container {
            width: min(100% - 24px, 1240px);
            padding-top: 54px;
          }

         .smc-hero h1 {
  font-size: clamp(2rem, 10vw, 3.15rem);
  line-height: 1.04;
  letter-spacing: -0.055em;
}

          .smc-field-grid {
            grid-template-columns: 1fr;
          }

          .smc-card-head,
          .smc-side-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .smc-form-card,
          .smc-side-panel {
            border-radius: 28px;
          }

          .smc-form-note {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .smc-submit,
          .smc-submit::after,
          .smc-spinner,
          .smc-direct-card svg {
            transition: none !important;
            animation: none !important;
          }

          .smc-submit:hover:not(:disabled),
          .smc-submit:focus-visible:not(:disabled) {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;