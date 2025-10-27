import { NextResponse } from 'next/server'
export async function POST(req: Request){
  try {
    const { message } = await req.json()
    const reply = `NeuroEdge Mock Reply: received "${message}". Recommend vitals and CBC.`
    return NextResponse.json({ reply })
  } catch(e) {
    return NextResponse.json({ reply: 'NeuroEdge Mock Reply: error' }, { status: 400 })
  }
}
