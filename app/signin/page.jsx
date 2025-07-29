"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{
        background: 'white',
        padding: '2rem 3rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        textAlign: 'center',
        maxWidth: 400,
      }}>
        <h1 style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '2rem', color: '#0f172a' }}>Sign In</h1>
        <p style={{ marginBottom: '2rem', color: '#334155' }}>
          You must be signed in to view this content.
        </p>
        <button
          onClick={() => signIn('jumpcloud', { callbackUrl: "/" })}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
            transition: 'background 0.2s',
          }}
        >
          Sign in with JumpCloud
        </button>
      </div>
    </div>
  );
} 