import { useState } from "react";
import { Link2, Wand2, Clock } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function UrlForm({ onCreated }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiresInDays, setExpiresInDays] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/urls", {
        originalUrl,
        customAlias: customAlias || undefined,
        expiresInDays: expiresInDays ? Number(expiresInDays) : undefined,
      });
      toast.success("Short link created!");
      onCreated(res.data);
      setOriginalUrl("");
      setCustomAlias("");
      setExpiresInDays("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 sm:p-5 bg-surface border-2 border-ink rounded-2xl shadow-[4px_4px_0_0_var(--color-ink)]"
    >
      <label className="flex items-center gap-2 border border-ink/20 rounded-lg px-3 py-2 focus-within:border-accent transition-colors">
        <Link2 size={18} className="text-ink/40 shrink-0" />
        <input
          type="url"
          placeholder="Paste your long URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          className="w-full outline-none bg-transparent text-ink placeholder-ink/40"
        />
      </label>

      <label className="flex items-center gap-2 border border-ink/20 rounded-lg px-3 py-2 focus-within:border-accent transition-colors">
        <Wand2 size={18} className="text-ink/40 shrink-0" />
        <input
          type="text"
          placeholder="Custom alias (optional)"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          className="w-full outline-none bg-transparent text-ink placeholder-ink/40"
        />
      </label>

      <label className="flex items-center gap-2 border border-ink/20 rounded-lg px-3 py-2 focus-within:border-accent transition-colors">
        <Clock size={18} className="text-ink/40 shrink-0" />
        <input
          type="number"
          placeholder="Expires in days (optional)"
          value={expiresInDays}
          onChange={(e) => setExpiresInDays(e.target.value)}
          className="w-full outline-none bg-transparent text-ink placeholder-ink/40"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-1 bg-accent text-white rounded-lg py-2.5 font-medium hover:opacity-90 active:translate-y-0.5 transition disabled:opacity-50"
      >
        {loading ? "Shortening…" : "Shorten link"}
      </button>
    </form>
  );
}
