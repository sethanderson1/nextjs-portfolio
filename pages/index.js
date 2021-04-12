import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
          <section className="w-5/6 h-96 bg-blue-700 rounded-3xl text-yellow-300 text-center ">
            <div className="border-blue-300 border-solid">
              <h2 className='my-12 text-3xl '>About</h2>
              <p className='text-yellow-50'>I'm Seth. That's me</p>
            </div>
          </section>
      </main>

    </div>
  )
}
