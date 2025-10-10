import { db } from "@/db";
import { subscriptionTable } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { key, email } = await req.json();

    if (!key) {
      return new Response("API Key bắt buộc", { status: 400 });
    }

    const subscription = await db
      .select()
      .from(subscriptionTable)
      .where(
        and(eq(subscriptionTable.email, email), eq(subscriptionTable.key, key))
      );

    return new Response("", {
      status: 200,
    });
  } catch (error) {
    return new Response("Lỗi server", { status: 500 });
  }
}
