import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <div className='flex flex-center justify-center align-center w-full md:w-1/2'>
        <Image
          className="relative "
          src="/card.svg"
          alt="olivra Logo"

          fill
          priority
        />
      </div>
    </main >
  )
}
