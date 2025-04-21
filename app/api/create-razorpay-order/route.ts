import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_jeKG9m3YBmoZGg',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount } = body

    const options = {
      amount: amount,
      currency: 'INR',
      receipt: 'receipt_' + Math.random().toString(36).substring(7),
    }

    const order = await razorpay.orders.create(options)
    return NextResponse.json(order)
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}

