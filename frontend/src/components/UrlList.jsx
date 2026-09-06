import { Inbox } from "lucide-react";
import UrlCard from "./UrlCard";

export default function UrlList({ urls, newShortCode, removingId, onDelete }) {
  if (urls.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center gap-2 border-2 border-dashed border-ink/20 rounded-xl py-10 text-center">
        <Inbox size={22} className="text-ink/30" />
        <p className="text-sm text-ink/50">
          No links yet. Paste one above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-xs font-mono text-ink/40 mb-3">
        {urls.length} {urls.length === 1 ? "link" : "links"}
      </p>
      <div className="flex flex-col gap-3">
        {urls.map((url) => (
          <UrlCard
            key={url._id}
            url={url}
            isNew={url.shortCode === newShortCode}
            isRemoving={url._id === removingId}
            onDelete={() => onDelete(url._id)}
          />
        ))}
      </div>
    </div>
  );
}
