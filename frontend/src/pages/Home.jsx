import { useState, useEffect } from "react";
import { Link2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import ThemeToggle from "../components/ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const [urls, setUrls] = useState([]);
  const [newShortCode, setNewShortCode] = useState(null);
  const [removingId, setRemovingId] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  const fetchUrls = async () => {
    try {
      const res = await api.get("/urls");
      setUrls(res.data);
    } catch {
      toast.error("Failed to load links");
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleCreated = (data) => {
    setNewShortCode(data.shortCode);
    fetchUrls();
  };

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(async () => {
      try {
        await api.delete(`/urls/${id}`);
        setUrls((prev) => prev.filter((u) => u._id !== id));
        toast.success("Link deleted");
      } catch {
        toast.error("Failed to delete link");
      } finally {
        setRemovingId(null);
      }
    }, 250);
  };

  return (
    <div className="min-h-screen transition-colors">
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <header className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-accent text-white">
              <Link2 size={18} />
            </div>
            <span className="font-display font-bold text-base sm:text-lg text-ink">
              Snip
            </span>
          </div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </header>

        <div className="mb-6">
          <h1 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1">
            Shorten a link
          </h1>
          <p className="text-sm text-ink/60">
            Paste a long URL below and get something short enough to share.
          </p>
          <span className="block w-10 h-0.5 bg-accent mt-4" />
        </div>

        <UrlForm onCreated={handleCreated} />

        <UrlList
          urls={urls}
          newShortCode={newShortCode}
          removingId={removingId}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
