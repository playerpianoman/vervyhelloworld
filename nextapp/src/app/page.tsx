import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          VervyHelloWorld
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Testing the Vervy Stack: Next.js, Vercel, shadcn/ui, Cursor, Drizzle ORM, Neon, Better Auth, and more!
        </p>
        <div className="space-y-4">
          <Link
            href="/test-auth"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Authentication
          </Link>
          <a
            href="/api/db-check"
            target="_blank"
            className="block w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Check Database
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click above to test the Better Auth integration with Google and GitHub OAuth, or check what data is in the database.
          </p>
        </div>
      </div>
    </div>
  );
}
