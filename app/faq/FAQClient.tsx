// FAQClient.tsx
"use client";

import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Layers, 
  Cpu, 
  Shield, 
  Globe2, 
  Briefcase 
} from 'lucide-react';
import { faqsData, categoriesData } from './faqs';
import './faq.css';

// Dynamic Icon Map lookup setup
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Search: Search,
  Layers: Layers,
  Cpu: Cpu,
  Shield: Shield,
  Globe2: Globe2,
  Briefcase: Briefcase
};

export default function FAQComponent() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtering criteria matching your custom hook
  const filteredFAQs = activeCategory === "all" 
    ? faqsData 
    : faqsData.filter(faq => faq.cat === activeCategory);

  return (
    <section className="faq-root">
      <div className="faq-container">
        
        {/* Main Content Header */}
        <header className="faq-header">
          <div className="faq-eyebrow">Questions & Answers</div>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-lede">
            Everything a hiring manager, founder, or technical evaluator might want to know — answered transparently.
          </p>
        </header>

        {/* Dynamic Nav Tabs Filters */}
        <nav className="faq-cats" aria-label="Filter by category">
          {categoriesData.map((cat) => {
            const SelectedIcon = iconMap[cat.iconName] || Search;
            return (
              <button
                key={cat.id}
                className={`faq-cat ${activeCategory === cat.id ? "faq-cat--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <SelectedIcon size={14} /> 
                <span>{cat.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Unified Interactivity Engine Container */}
        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <details 
              key={`${faq.cat}-${index}`} 
              className="faq-item" 
              open
            >
              <summary className="faq-q">
                <span>{faq.question}</span>
                <ChevronDown size={16} className="faq-chevron" aria-hidden="true" />
              </summary>
              <p className="faq-a">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Custom Outro Call-To-Action Link Element */}
        <div className="faq-footer">
          <p>
            Have a question not listed here?{' '}
            <a href="/contact" className="faq-link">Get in touch →</a>
          </p>
        </div>

      </div>
    </section>
  );
}