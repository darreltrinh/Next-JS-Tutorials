export default function handler(req, res) {
    res.setPreviewData({ user: 'wavey' })
    res.redirect(req.query.redirect)
}