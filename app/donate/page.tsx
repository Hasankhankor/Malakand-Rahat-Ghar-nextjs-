import { DonationForm } from "@/components/donation-form";

export default function DonatePage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Donate</h1>
      <DonationForm />
    </div>
  );
}