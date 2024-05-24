import { validateEmail } from "@/actions/validateEmail";
import { type NextRequest } from "next/server";

export const revalidate = true;

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email") || "";
  const isValid = await validateEmail(email);
  return Response.json({ isValid, email });
}
