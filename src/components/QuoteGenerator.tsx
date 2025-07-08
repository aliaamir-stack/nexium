"use client";

import React, { useState } from "react";
import { Check, Copy, RefreshCcw, Twitter } from "lucide-react";
import { quotes, Quote } from "../data/quotes";

const categories = [
  { label: "All", value: "" },
  { label: "Inspire", value: "inspirational" },
  { label: "Life", value: "life" },
  { label: "Love", value: "love" },
  { label: "Wisdom", value: "wisdom" },
  { label: "Tech", value: "technology" },
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [category, setCategory] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const getRandomQuote = (category: string): Quote | null => {
    const filteredQuotes = category
      ? quotes.filter((q) => q.mood === category)
      : quotes;
    if (filteredQuotes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  };

  const fetchQuote = () => {
    const randomQuote = getRandomQuote(category);
    setQuote(randomQuote);
    setCopied(false);
  };

  React.useEffect(() => {
    fetchQuote();
  }, [category]);

  const handleCopy = () => {
    if (!quote) return;
    navigator.clipboard.writeText(`"${quote.content}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetURL = quote
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${quote.content}" — ${quote.author}`
      )}`
    : "#";

  return (
    <section className="w-full max-w-xl mx-auto flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-4 w-full bg-white rounded-xl border border-gray-200 shadow-sm p-6 dark:bg-[#1a1a1a] dark:border-white/10">
        <div className="flex justify-between items-center">
          <select
            aria-label="Select quote category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map((cat) => (
              <option
                value={cat.value}
                key={cat.value}
                className="bg-background dark:bg-[#1a1a1a]"
              >
                {cat.label}
              </option>
            ))}
          </select>
          <button
            onClick={fetchQuote}
            className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600/90"
          >
            <RefreshCcw size={16} />
            New Quote
          </button>
        </div>

        {quote ? (
          <>
            <blockquote className="text-lg font-medium leading-relaxed text-center md:text-left">
              “{quote.content}”
            </blockquote>
            <p className="self-end mt-2 font-semibold">— {quote.author}</p>
          </>
        ) : (
          <p className="text-sm">No quotes available for this category.</p>
        )}

        <div className="flex gap-3 justify-end mt-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={tweetURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Twitter size={16} /> Tweet
          </a>
        </div>
      </div>
    </section>
  );
}
