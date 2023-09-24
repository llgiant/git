import Link from "next/link";
import Image from "next/image"

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen bg-white dark:bg-gray-900">

            <section className="w-full mx-auto">
                <Image
                    className="object-cover w-full h-64"
                    src="/images/not-found-img.avif"
                    width={800}
                    height={800}
                    alt=""
                />
            </section>

            <div className="flex items-center justify-center flex-1">
                <div className="max-w-xl px-4 py-8 mx-auto text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        We can&apos;t find that page.
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>
                    <Link href="/" className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">← Back to home</Link>
                </div>
            </div>
        </div>

    )
}