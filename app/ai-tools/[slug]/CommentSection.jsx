"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  Send,
  User,
  Mail,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const getInitials = (name = "") => {
  const cleanName = name.trim();

  if (!cleanName) return "G";

  return cleanName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const formatCommentDate = (date) => {
  if (!date) return "Recently";

  try {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
};

const CommentSection = ({ articleId, articleSlug, articleType, articleTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const commentLength = formData.comment.length;
  const isSubmitting = status === "loading";

  const loadComments = useCallback(async () => {
    if (!articleId) {
      setCommentsLoading(false);
      return;
    }

    try {
      setCommentsLoading(true);

      const response = await fetch(
        `/api/comments?articleId=${articleId}&status=approved`
      );

      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
      }
    } catch (error) {
      console.error("Error loading comments:", error);
    } finally {
      setCommentsLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status === "error" || status === "success") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.comment.trim()
    ) {
      setStatus("error");
      setMessage("Please fill in all fields before submitting.");
      return;
    }

    if (formData.comment.trim().length < 10) {
      setStatus("error");
      setMessage("Comment must be at least 10 characters long.");
      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          articleId,
          articleSlug,
          articleType,
          articleTitle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you. Your comment has been submitted and is pending review."
        );
        setFormData({ name: "", email: "", comment: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to submit comment. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const statusConfig = useMemo(() => {
    if (status === "success") {
      return {
        icon: CheckCircle,
        className: "cs-status cs-status--success",
      };
    }

    if (status === "error") {
      return {
        icon: AlertCircle,
        className: "cs-status cs-status--error",
      };
    }

    return null;
  }, [status]);

  const StatusMessage = () => {
    if (!statusConfig || !message) return null;

    const Icon = statusConfig.icon;

    return (
      <div className={statusConfig.className}>
        <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
        <span>{message}</span>
      </div>
    );
  };

  return (
    <section className="cs-section" aria-labelledby="comments-title">
      <div className="cs-shell">
        <div className="cs-ambient" aria-hidden="true" />

        <div className="cs-header">
          <div>
            <div className="cs-eyebrow">
              <span />
              Reader Signal
            </div>

            <h3 id="comments-title">
              Comments <strong>{comments.length}</strong>
            </h3>

            <p>
              Join the discussion with a thoughtful response. Comments are
              moderated to keep the conversation strategic, useful, and
              professional.
            </p>
          </div>

          <div className="cs-header-badge">
            <ShieldCheck size={17} strokeWidth={2.3} />
            Moderated
          </div>
        </div>

        <div className="cs-grid">
          {/* Existing Comments */}
          <div className="cs-comments-panel">
            <div className="cs-panel-head">
              <div>
                <span>Discussion</span>
                <strong>Approved comments</strong>
              </div>

              <MessageCircle size={18} strokeWidth={2.35} />
            </div>

            {commentsLoading ? (
              <div className="cs-loading-list" aria-label="Loading comments">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="cs-comment-skeleton">
                    <span />
                    <p />
                    <p />
                  </div>
                ))}
              </div>
            ) : comments.length > 0 ? (
              <div className="cs-comment-list">
                {comments.map((comment) => (
                  <article key={comment._id} className="cs-comment-card">
                    <div className="cs-comment-top">
                      <div className="cs-avatar" aria-hidden="true">
                        {getInitials(comment.name)}
                      </div>

                      <div className="cs-comment-meta">
                        <h4>{comment.name}</h4>

                        <span>
                          <Clock3 size={12} strokeWidth={2.4} />
                          {formatCommentDate(comment.submittedAt)}
                        </span>
                      </div>
                    </div>

                    <p>{comment.comment}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="cs-empty">
                <div className="cs-empty-icon">
                  <MessageCircle size={22} strokeWidth={2.2} />
                </div>

                <strong>No comments yet</strong>

                <p>
                  Be the first to share a thoughtful perspective on this
                  insight.
                </p>
              </div>
            )}
          </div>

          {/* Comment Form */}
          <div className="cs-form-panel">
            <div className="cs-panel-head">
              <div>
                <span>Contribute</span>
                <strong>Leave a comment</strong>
              </div>

              <Send size={18} strokeWidth={2.35} />
            </div>

            <StatusMessage />

            <form onSubmit={handleSubmit} className="cs-form">
              <div className="cs-field-grid">
                <div className="cs-field">
                  <label htmlFor="name">
                    <User size={14} strokeWidth={2.3} />
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    maxLength={50}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="cs-field">
                  <label htmlFor="email">
                    <Mail size={14} strokeWidth={2.3} />
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="cs-field">
                <label htmlFor="comment">
                  <MessageCircle size={14} strokeWidth={2.3} />
                  Comment *
                </label>

                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  placeholder="Share your thoughts about this article..."
                  disabled={isSubmitting}
                />

                <div className="cs-count-row">
                  <span>Minimum 10 characters</span>
                  <span className={commentLength > 900 ? "is-warning" : ""}>
                    {commentLength}/1000
                  </span>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="cs-submit">
                {isSubmitting ? (
                  <>
                    <span className="cs-spinner" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} strokeWidth={2.35} />
                    Submit Comment
                  </>
                )}
              </button>

              <p className="cs-privacy-note">
                Your email will not be published. All comments are reviewed
                before appearing on the site.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cs-section {
          --cs-gold: #e3b341;
          --cs-gold-deep: #c9952c;
          --cs-gold-soft: #f2cc6b;
          --cs-ink: #ede9dc;
          --cs-ink-strong: #f7f1df;
          --cs-accent-ink: #2e2106;

          position: relative;
          width: 100%;
          margin: 0 0 8px;
          color: var(--cs-ink);
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .cs-shell {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(227, 179, 65, 0.15);
          background:
            radial-gradient(
              660px 260px at 16% 0%,
              rgba(227, 179, 65, 0.1),
              transparent 70%
            ),
            radial-gradient(
              420px 220px at 92% 8%,
              rgba(82, 113, 255, 0.055),
              transparent 68%
            ),
            rgba(7, 16, 32, 0.76);
          padding: clamp(22px, 4vw, 34px);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(22px);
        }

        .cs-shell::before {
          content: "";
          position: absolute;
          top: 0;
          left: 30px;
          right: 30px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.58),
            transparent
          );
        }

        .cs-ambient {
          position: absolute;
          inset: -80px;
          pointer-events: none;
          background:
            radial-gradient(
              420px 220px at 18% 18%,
              rgba(227, 179, 65, 0.14),
              transparent 70%
            ),
            radial-gradient(
              320px 180px at 86% 78%,
              rgba(201, 149, 44, 0.08),
              transparent 72%
            );
          opacity: 0.74;
          filter: blur(30px);
        }

        .cs-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 13px;
          color: var(--cs-gold-soft);
          font-size: 10.5px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .cs-eyebrow span {
          width: 22px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--cs-gold-deep),
            var(--cs-gold-soft)
          );
          box-shadow: 0 0 14px rgba(227, 179, 65, 0.48);
        }

        .cs-header h3 {
          margin: 0;
          color: var(--cs-ink-strong);
          font-size: clamp(1.75rem, 3vw, 2.45rem);
          font-weight: 950;
          line-height: 1.03;
          letter-spacing: -0.055em;
        }

        .cs-header h3 strong {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 34px;
          margin-left: 8px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.24);
          background: rgba(227, 179, 65, 0.1);
          color: var(--cs-gold-soft);
          font-size: 0.9rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          vertical-align: middle;
        }

        .cs-header p {
          max-width: 620px;
          margin: 12px 0 0;
          color: rgba(237, 233, 220, 0.58);
          font-size: 14px;
          font-weight: 560;
          line-height: 1.72;
          letter-spacing: -0.01em;
        }

        .cs-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          flex-shrink: 0;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background: rgba(227, 179, 65, 0.065);
          color: rgba(237, 233, 220, 0.74);
          padding: 0 13px;
          font-size: 12px;
          font-weight: 760;
          line-height: 1;
        }

        .cs-header-badge svg {
          color: var(--cs-gold);
        }

        .cs-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);
          gap: 18px;
          align-items: start;
        }

        .cs-comments-panel,
        .cs-form-panel {
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(227, 179, 65, 0.12);
          background:
            radial-gradient(
              420px 180px at 18% 0%,
              rgba(227, 179, 65, 0.07),
              transparent 70%
            ),
            rgba(3, 7, 16, 0.34);
          box-shadow:
            0 20px 70px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(16px);
        }

        .cs-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid rgba(227, 179, 65, 0.1);
          background: rgba(227, 179, 65, 0.035);
          padding: 17px 18px;
        }

        .cs-panel-head span {
          display: block;
          margin-bottom: 5px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 10px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .cs-panel-head strong {
          display: block;
          color: var(--cs-ink-strong);
          font-size: 15px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .cs-panel-head svg {
          color: var(--cs-gold-soft);
        }

        .cs-comment-list,
        .cs-loading-list {
          display: grid;
          gap: 12px;
          padding: 16px;
        }

        .cs-comment-card {
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.1);
          background: rgba(255, 255, 255, 0.028);
          padding: 16px;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .cs-comment-card:hover {
          transform: translateY(-2px);
          border-color: rgba(227, 179, 65, 0.22);
          background: rgba(227, 179, 65, 0.045);
        }

        .cs-comment-top {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 12px;
        }

        .cs-avatar {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          border-radius: 14px;
          border: 1px solid rgba(227, 179, 65, 0.26);
          background: linear-gradient(
            135deg,
            rgba(242, 204, 107, 0.16),
            rgba(227, 179, 65, 0.08)
          );
          color: var(--cs-gold-soft);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: -0.03em;
          box-shadow: 0 10px 24px rgba(227, 179, 65, 0.06);
        }

        .cs-comment-meta {
          min-width: 0;
        }

        .cs-comment-meta h4 {
          margin: 0;
          color: var(--cs-ink-strong);
          font-size: 14px;
          font-weight: 850;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .cs-comment-meta span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 5px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 11px;
          font-weight: 650;
          line-height: 1;
        }

        .cs-comment-meta svg {
          color: var(--cs-gold);
        }

        .cs-comment-card > p {
          margin: 0;
          color: rgba(237, 233, 220, 0.68);
          font-size: 13.5px;
          font-weight: 560;
          line-height: 1.75;
          letter-spacing: -0.006em;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .cs-empty {
          display: grid;
          place-items: center;
          min-height: 248px;
          padding: 28px 22px;
          text-align: center;
        }

        .cs-empty-icon {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          margin-bottom: 14px;
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background: rgba(227, 179, 65, 0.075);
          color: var(--cs-gold-soft);
          box-shadow: 0 18px 40px rgba(227, 179, 65, 0.08);
        }

        .cs-empty strong {
          color: var(--cs-ink-strong);
          font-size: 16px;
          font-weight: 900;
          letter-spacing: -0.025em;
        }

        .cs-empty p {
          max-width: 280px;
          margin: 8px auto 0;
          color: rgba(237, 233, 220, 0.5);
          font-size: 13px;
          font-weight: 560;
          line-height: 1.6;
        }

        .cs-comment-skeleton {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.08);
          background: rgba(255, 255, 255, 0.026);
          padding: 16px;
        }

        .cs-comment-skeleton span,
        .cs-comment-skeleton p {
          display: block;
          border-radius: 999px;
          background: rgba(237, 233, 220, 0.07);
          animation: csPulse 1.7s ease-in-out infinite;
        }

        .cs-comment-skeleton span {
          width: 38%;
          height: 14px;
          margin-bottom: 15px;
        }

        .cs-comment-skeleton p {
          height: 11px;
          margin-bottom: 8px;
        }

        .cs-comment-skeleton p:nth-child(2) {
          width: 100%;
        }

        .cs-comment-skeleton p:nth-child(3) {
          width: 74%;
          margin-bottom: 0;
        }

        .cs-form {
          display: grid;
          gap: 15px;
          padding: 16px;
        }

        .cs-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .cs-field {
          display: grid;
          gap: 8px;
        }

        .cs-field label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(237, 233, 220, 0.68);
          font-size: 12px;
          font-weight: 760;
          line-height: 1;
        }

        .cs-field label svg {
          color: var(--cs-gold);
        }

        .cs-field input,
        .cs-field textarea {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(227, 179, 65, 0.13);
          background: rgba(3, 7, 16, 0.36);
          color: var(--cs-ink-strong);
          padding: 13px 14px;
          font-size: 13.5px;
          font-weight: 560;
          line-height: 1.45;
          outline: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .cs-field textarea {
          min-height: 142px;
          resize: vertical;
        }

        .cs-field input::placeholder,
        .cs-field textarea::placeholder {
          color: rgba(237, 233, 220, 0.34);
        }

        .cs-field input:focus,
        .cs-field textarea:focus {
          border-color: rgba(227, 179, 65, 0.42);
          background: rgba(3, 7, 16, 0.5);
          box-shadow:
            0 0 0 4px rgba(227, 179, 65, 0.075),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .cs-field input:disabled,
        .cs-field textarea:disabled {
          cursor: not-allowed;
          opacity: 0.62;
        }

        .cs-count-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: rgba(237, 233, 220, 0.38);
          font-size: 11px;
          font-weight: 650;
          line-height: 1;
        }

        .cs-count-row .is-warning {
          color: var(--cs-gold-soft);
        }

        .cs-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          width: fit-content;
          border: 0;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            var(--cs-gold-soft),
            var(--cs-gold),
            var(--cs-gold-deep)
          );
          color: var(--cs-accent-ink);
          padding: 0 20px;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          box-shadow:
            0 16px 38px rgba(227, 179, 65, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            filter 180ms ease;
        }

        .cs-submit:hover:not(:disabled),
        .cs-submit:focus-visible:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.04);
          box-shadow:
            0 22px 52px rgba(227, 179, 65, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.26);
          outline: none;
        }

        .cs-submit:disabled {
          cursor: not-allowed;
          opacity: 0.62;
        }

        .cs-spinner {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          border: 2px solid rgba(46, 33, 6, 0.26);
          border-top-color: var(--cs-accent-ink);
          animation: csSpin 700ms linear infinite;
        }

        .cs-privacy-note {
          margin: -2px 0 0;
          color: rgba(237, 233, 220, 0.42);
          font-size: 11.5px;
          font-weight: 560;
          line-height: 1.6;
        }

        .cs-status {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 16px 16px 0;
          border-radius: 16px;
          padding: 13px 14px;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.55;
        }

        .cs-status svg {
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .cs-status--success {
          border: 1px solid rgba(34, 197, 94, 0.24);
          background: rgba(34, 197, 94, 0.09);
          color: #86efac;
        }

        .cs-status--error {
          border: 1px solid rgba(248, 113, 113, 0.24);
          background: rgba(248, 113, 113, 0.09);
          color: #fca5a5;
        }

        @keyframes csPulse {
          0%,
          100% {
            opacity: 0.46;
          }

          50% {
            opacity: 0.88;
          }
        }

        @keyframes csSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 980px) {
          .cs-grid {
            grid-template-columns: 1fr;
          }

          .cs-form-panel {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .cs-shell {
            border-radius: 28px;
            padding: 18px;
          }

          .cs-header {
            flex-direction: column;
            gap: 16px;
          }

          .cs-header-badge {
            width: fit-content;
          }

          .cs-field-grid {
            grid-template-columns: 1fr;
          }

          .cs-submit {
            width: 100%;
          }

          .cs-panel-head {
            padding: 16px;
          }

          .cs-comment-list,
          .cs-loading-list,
          .cs-form {
            padding: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-comment-card,
          .cs-field input,
          .cs-field textarea,
          .cs-submit,
          .cs-comment-skeleton span,
          .cs-comment-skeleton p,
          .cs-spinner {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommentSection;