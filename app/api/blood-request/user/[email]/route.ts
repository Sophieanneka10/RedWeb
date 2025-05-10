import { NextResponse } from "next/server"

import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, context: { params: { email: string } }) {
  try {
    const email = context.params.email

    // In a real implementation, you would make a request to your Spring Boot backend
    const response = await fetch(`http://localhost:8080/api/blood-request/user/${email}`)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching user blood requests:", error)
    return NextResponse.json({ message: "An error occurred while fetching user blood requests" }, { status: 500 })
  }
}
