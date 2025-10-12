import { verifyApi } from "@/services/subscription";
import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SubscriptionState = {
  key: string | null;
  isValid: boolean | null;
  error: string | null;
  setSubscriptionKey: (key: string) => void;
  verifySubscriptionKey: () => Promise<void>;
  clearSubscriptionKey: () => void;
  clearError: () => void;
};

export const useSubscription = create<SubscriptionState>()(
  persist(
    (set, get) => ({
      key: null,
      isValid: null,
      error: null,
      setSubscriptionKey: (key) => set({ key, isValid: null }),
      verifySubscriptionKey: async () => {
        const { key } = get();

        if (!key) {
          return;
        }

        try {
          const result = await verifyApi({ key });

          if (result.data.message === "Xác thực thành công") {
            set({ isValid: true, error: null });
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            set({
              key: null,
              isValid: false,
              error: err.response?.data + ". Key đã được xóa!",
            });
          } else {
            set({
              key: null,
              isValid: false,
              error: "Unexpected error",
            });
          }
        }
      },
      clearSubscriptionKey: () => set({ key: null }),
      clearError: () => {
        set({ error: null, isValid: null });
      },
    }),
    {
      name: "subscription",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
