import ActiveLicenseDialog from "@/components/dashboard/ActiveLicenseDialog";
import TabSelection from "@/components/dashboard/TabSelection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { isSubscription } from "@/lib/utils";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl tracking-tight text-blue-600 font-semibold">
            TOOL SÁNG TẠO NỘI DUNG v10
          </h1>
          <ActiveLicenseDialog />
        </div>
        <div className="mt-6">
          <TabSelection />
        </div>

        <div className="my-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">
              Chào mừng đến với{" "}
              <span className="text-blue-700">TOOL SÁNG TẠO NỘI DUNG v10</span>
            </h1>
            <p>
              Đây là công cụ AI toàn diện được thiết kế để hỗ trợ bạn trong mọi
              khâu của quá trình sáng tạo video YouTube, từ lên ý tưởng, viết
              kịch bản, tối ưu SEO cho đến tạo prompt hình ảnh và video.
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-6">
            <h1 className="text-xl font-semibold">Các tính năng chính</h1>
            <div>
              <h4 className="text-blue-700 font-semibold">Công cụ chính</h4>
              <ul className="mt-1">
                <li>
                  ✅ <strong>Agent Tự Động:</strong> Tự động hóa toàn bộ quy
                  trình từ ý tưởng ra kịch bản, prompt video và SEO.
                </li>
                <li>
                  ✅ <strong>Viết Tiêu Đề:</strong> Tạo ra các tiêu đề hấp dẫn,
                  có tỷ lệ click cao.
                </li>
                <li>
                  ✅ <strong>Viết Nội Dung:</strong> Soạn thảo kịch bản video
                  hoặc bài viết blog từ ý tưởng.
                </li>
                <li>
                  ✅ <strong>Viết lại Nội dung:</strong> Biến nội dung có sẵn
                  thành một kịch bản mới mẻ, độc đáo.
                </li>
                <li>
                  ✅ <strong>SEO YouTube:</strong> Phân tích và tối ưu hóa SEO
                  cho video của bạn.
                </li>
                <li>
                  ✅ <strong>Tạo Prompts:</strong> Chuyển thể kịch bản thành các
                  câu lệnh tạo ảnh chi tiết.
                </li>
                <li>
                  ✅ <strong>Tạo Prompts Veo:</strong> Tạo prompt chuyên dụng
                  cho model video Veo của Google.
                </li>
                <li>
                  ✅ <strong>Sửa lỗi chính tả:</strong> Kiểm tra và sửa lỗi ngữ
                  pháp, chính tả Tiếng Việt.
                </li>
                <li>
                  ✅ <strong>Chat:</strong> Trò chuyện, hỏi đáp trực tiếp với
                  AI.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-6">
            <h1 className="text-xl font-semibold">Liên hệ & Hỗ trợ</h1>
            <div>
              <p>
                <strong>Phát triển bởi:</strong> Tài Lê MMO
              </p>
              <p>
                <strong>Số điện thoại / Zalo:</strong> 0394342601
              </p>
              <p>
                Nếu bạn gặp bất kỳ vấn đề gì hoặc có góp ý để cải thiện công cụ,
                đừng ngần ngại liên hệ với tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
