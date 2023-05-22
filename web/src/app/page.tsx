export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div></div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[340px] text-center leading-relaxed">
            You have not registered any memories yet, start to{' '}
            <a href="" className="underline">
              create now
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
