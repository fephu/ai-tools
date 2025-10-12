import { db } from "@/db";
import { subscriptionTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { key } = await req.json();

    if (!key) {
      return new Response("API Key bắt buộc", { status: 400 });
    }

    const subscription = await db
      .select()
      .from(subscriptionTable)
      .where(eq(subscriptionTable.key, key))
      .limit(1);

    if (subscription.length === 0) {
      return new Response("Thông tin không hợp lệ", {
        status: 400,
      });
    }

    const now = new Date();
    const expiresAt = new Date(subscription[0].expiredAt);

    const isValid = expiresAt > now;

    if (!isValid) {
      return new Response("Key đã hết hạn", {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Xác thực thành công" }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Lỗi server", { status: 500 });
  }
}
