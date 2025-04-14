"use client";

import { useTranslation } from "@/components/theme-provider";

export default function AboutUsPage() {
  const t = useTranslation();

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">{t.aboutUs}</h1>
      <p className="text-lg">{t.aboutDescription}</p>
    </div>
  );
}