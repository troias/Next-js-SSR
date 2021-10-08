import fs from 'fs/promises'
import path from 'path'

export const getData = async () => {
    const filePath = path.join(process.cwd(), "dummy-backend.json")
    const req = await fs.readFile(filePath)
    const data = JSON.parse(req)
    return data
}