import Footer from "@/layout/Footer"
import Head from "next/head"

function About() {
    return (
        <>
            <Head>
                <title>About wavey</title>
                <meta name='description' content='all things wavey' />
            </Head>
            <h1 className="content">About</h1>
        </>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}