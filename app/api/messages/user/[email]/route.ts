import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { email: string } }) {
  try {
    const email = params.email

    // In a real implementation, you would make a request to your Spring Boot backend
    const response = await fetch(`http://localhost:8080/api/messages/user/${email}`)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching user messages:", error)
    return NextResponse.json({ message: "An error occurred while fetching user messages" }, { status: 500 })
  }
}
