/** backend endpoint: /api/hello */
export default async function handler(req, res) {
    if (req.method == 'GET') {
        const dataJson = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await dataJson.json()
        return res.status(200).json([data])
    } else {
        return res.status(500).json({data: [], error: 'error'})
    }
}