"use client";

import { signIn, signOut, useSession } from "@/lib/auth-client";

export default function TestAuth() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Better Auth Test Page</h1>
      <p className="mb-4">This page tests the Better Auth setup.</p>
      
      {session ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 rounded">
            <h2 className="font-semibold">Signed in as:</h2>
            <p>Name: {session.user.name}</p>
            <p>Email: {session.user.email}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <button
            onClick={() => signIn.social({ provider: "google" })}
            className="block w-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn.social({ provider: "github" })}
            className="block w-fit px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
} 