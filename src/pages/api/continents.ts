import { citiesByCountry } from '@/database/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default function Continents(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(citiesByCountry)
}
