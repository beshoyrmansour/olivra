import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <div className='flex flex-center justify-center align-center h-full w-full md:w-1/2 m-auto' >
        <Image
          className="relative "
          src="/card.svg"
          alt="olivra Logo"
          width={100}
          height={100}
          style={{ height: '100%', width: '100%', }}
          priority
        />
      </div>
    </main >
  )
}
