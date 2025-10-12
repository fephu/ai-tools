import { Dispatch, SetStateAction } from "react";

export const TABS = [
  "Agent Tự Động",
  "Viết Tiêu Đề",
  "Viết Nội Dung",
  "Viết lại Nội dung",
  "SEO YouTube",
  "Tạo Prompts",
  "Tạo Prompts Veo",
  "Sửa lỗi chính tả",
  "Chat",
  "API Key",
];

export interface SeoAnalysisResult {
  mainKeyword: string;
  relatedKeywords: string[];
  hashtags: string[];
  titles: string[];
  description: string;
  thumbnailPrompt: string;
}

export type NotificationState = {
  message: string;
  type: "info" | "error" | "success";
} | null;
export type SetNotification = Dispatch<SetStateAction<NotificationState>>;

export interface AgentResult {
  viralPlan: string;
  characters: { name: string; description: string }[];
  script: string;
  veo3Prompts: string;
  veo2Prompts: string;
  seo: SeoAnalysisResult | null;
}
