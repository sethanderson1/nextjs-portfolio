import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <header className="text-blue-100">
          <h1 className="text-center">
            Seth Anderson
            </h1>
          <h2 className="text-center">
            Full Stack Developer
            </h2>
        </header>
        <section className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 h-96 bg-blue-700 text-yellow-300 text-center ">
            <div>
              <h2 className='my-12 text-3xl'>About</h2>
              <p className='text-yellow-50'>I'm Seth. That's me</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
