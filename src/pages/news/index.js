function News({ data }) {
    return <h1 className="content">{data}</h1>
}

export default News

export async function getStaticProps(context) {
    console.log('Running getStaticProps', context.previewData)
    return {
        props: {
            data: context.preview 
            ? 'list of drafts'
            : 'List of published articles',
        },
    }
}