import { GenerateToken } from "@/lib/token";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return new Response("Thông tin đăng nhập không chính xác.", {
        status: 400,
      });
    }

    const token = GenerateToken(username);

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return new Response(
        JSON.stringify({ message: "Đăng nhập thành công.", token }),
        {
          status: 200,
        }
      );
    }

    return new Response("Thông tin đăng nhập không chính xác.", {
      status: 400,
    });
  } catch (error) {
    return new Response("Invalid request", { status: 400 });
  }
}
