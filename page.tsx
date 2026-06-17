"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ClientRow = {
  id: string;
  clientName: string;
  brandType: string;
  audience: string;
  updatedAt: number;
};

export default function DashboardPage() {
  const [clients, setClients] = useState<ClientRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [audience, setAudience] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  async function loadClients() {
    setLoading(true);
    try {
      const res = await fetch("/api/clients");
      const data = await res.json();
      setClients(data.clients || []);
    } catch {
      setError("Could not load clients. Refresh to try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setCreating(true);
    setError("");
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientName: name, brandType, audience }),
      });
      if (!res.ok) throw new Error("Failed to create client");
      const data = await res.json();
      window.location.href = `/client/${data.id}`;
    } catch {
      setError("Could not create the client. Try again.");
      setCreating(false);
    }
  }

  async function handleDelete(id: string, clientName: string) {
    if (!confirm(`Delete ${clientName}? This can't be undone.`)) return;
    try {
      await fetch(`/api/clients/${id}`, { method: "DELETE" });
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setError("Could not delete that client.");
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>
      <h1 style={{ fontSize: "1.7rem", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 4 }}>
        Website Copy System
      </h1>
      <div
        className="sans"
        style={{
          fontSize: "0.8rem",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1.75rem",
        }}
      >
        Built on the Copy Posse framework — your clients, saved
      </div>

      {error && (
        <div
          className="sans"
          style={{
            background: "var(--danger-soft)",
            border: "1px solid #f0d2c5",
            borderRadius: 4,
            padding: "10px 14px",
            marginBottom: "1.25rem",
            fontSize: "0.82rem",
            color: "var(--accent)",
          }}
        >
          {error}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Your clients</h2>
        <button
          className="sans"
          onClick={() => setShowForm((v) => !v)}
          style={{
            padding: "8px 16px",
            background: showForm ? "var(--card)" : "var(--ink)",
            color: showForm ? "var(--ink)" : "var(--bg)",
            border: "1px solid var(--ink)",
            borderRadius: 3,
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {showForm ? "Cancel" : "+ New client"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleCreate}
          className="sans"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            padding: "1.25rem",
            marginBottom: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div>
            <label style={labelStyle}>Client name</label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Bright Path Coaching"
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label style={labelStyle}>Brand type</label>
            <input
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
              placeholder="e.g. coach / SaaS / eComm"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Target audience</label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g. burnt-out female professionals"
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            disabled={creating}
            style={{
              padding: "9px 16px",
              background: "var(--accent)",
              color: "white",
              border: "none",
              borderRadius: 3,
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: creating ? "default" : "pointer",
              opacity: creating ? 0.7 : 1,
              alignSelf: "flex-start",
            }}
          >
            {creating ? "Creating…" : "Create client"}
          </button>
        </form>
      )}

      {loading ? (
        <p className="sans" style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
          Loading clients…
        </p>
      ) : clients.length === 0 ? (
        <p className="sans" style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
          No clients yet. Create your first one to get started.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {clients.map((c) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "0.9rem 1.1rem",
              }}
            >
              <Link href={`/client/${c.id}`} style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "1rem", fontWeight: 600 }}>{c.clientName}</div>
                <div className="sans" style={{ fontSize: "0.76rem", color: "var(--ink-soft)", marginTop: 2 }}>
                  {[c.brandType, c.audience].filter(Boolean).join(" · ") || "No details yet"}
                </div>
              </Link>
              <button
                className="sans"
                onClick={() => handleDelete(c.id, c.clientName)}
                style={{
                  padding: "5px 11px",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  fontSize: "0.72rem",
                  color: "var(--ink-soft)",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.68rem",
  color: "var(--ink-soft)",
  marginBottom: 5,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: "0.85rem",
  padding: "7px 10px",
  border: "1px solid var(--border)",
  borderRadius: 3,
  background: "var(--bg)",
  color: "var(--ink)",
};
