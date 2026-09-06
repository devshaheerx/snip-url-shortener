import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  MousePointerClick,
  Trash2,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

export default function UrlCard({ url, isNew, isRemoving, onDelete }) {
  const [confirming, setConfirming] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const link = `http://localhost:5000/${url.shortCode}`;
    navigator.clipboard.writeText(link);
    toast.success("Copied to clipboard!");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`relative overflow-hidden border border-ink/15 rounded-xl pl-5 pr-4 py-4 bg-surface flex flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_var(--color-ink)] ${
        isNew ? "animate-pop-in" : ""
      } ${isRemoving ? "opacity-0 scale-95 -translate-y-1" : "opacity-100 scale-100"}`}
    >
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-ink/50 truncate">{url.originalUrl}</p>
        {!confirming && (
          <button
            onClick={() => setConfirming(true)}
            className="text-ink/30 hover:text-red-500 transition-colors shrink-0"
            aria-label="Delete link"
          >
            <Trash2 size={15} />
          </button>
        )}
      </div>

      {confirming ? (
        <div className="flex items-center justify-between bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2 animate-pop-in">
          <span className="text-xs text-ink/70">Hide this link?</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onDelete}
              className="p-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
              aria-label="Confirm hide"
            >
              <Check size={13} />
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="p-1 rounded-md text-ink/50 hover:bg-ink/10 transition-colors"
              aria-label="Cancel"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <a
              href={`http://localhost:5000/${url.shortCode}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-accent flex items-center gap-1.5"
            >
              localhost:5000/{url.shortCode}
              <ExternalLink size={13} />
            </a>

            <button
              onClick={handleCopy}
              className="text-ink/40 hover:text-ink transition-colors"
              aria-label="Copy short link"
            >
              {copied ? (
                <Check size={16} className="text-accent animate-check" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-volt">
            <MousePointerClick size={13} />
            {url.clicks} clicks
          </div>
        </>
      )}
    </div>
  );
}
