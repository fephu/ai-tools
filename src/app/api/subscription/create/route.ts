import { db } from "@/db";
import { subscriptionTable } from "@/db/schema";
import { sendKey } from "@/lib/mailer";
import { GenerateToken } from "@/lib/token";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    const subscription = await db
      .select()
      .from(subscriptionTable)
      .where(eq(subscriptionTable.email, email));

    if (subscription.length !== 0) {
      return new Response("Email này đã được đăng ký.", {
        status: 403,
      });
    }
    const key = GenerateToken(email);
    await db.insert(subscriptionTable).values({ email, name, key });

    // TODO: send key to user email
    await sendKey(email, key);

    return new Response(
      JSON.stringify({ message: "Đã đăng ký nhận key 7 ngày." }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response("Lỗi Server", { status: 500 });
  }
}
