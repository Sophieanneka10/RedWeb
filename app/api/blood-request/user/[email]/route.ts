import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email

    // In a real implementation, you would make a request to your Spring Boot backend
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
    const response = await fetch(`${API_URL}/api/blood-request/user/${email}`)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching user blood requests:", error)
    return NextResponse.json({ message: "An error occurred while fetching user blood requests" }, { status: 500 })
  }
}
