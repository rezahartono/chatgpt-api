import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/loading.module.css'

export default function Loading() {
    return (
        <>
            <Head>
                <title>Chat GPT API</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <Image className={styles.imgLoading} src="/images/bot.png" width={250} height={250} alt="" />
                </div>
            </main>
        </>
    )
}
