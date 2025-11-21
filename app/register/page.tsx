import { RegisterForm } from "@/components/features/register-form";

export default function RegisterPage() {
  return (
    <div className="grid xl:grid-cols-[700px_1fr] min-h-screen">
      <div className="flex justify-center items-center p-8 bg-zinc-50 xl:min-w-[500px]">
        <RegisterForm />
      </div>
      <div className="hidden xl:block bg-linear-to-bl from-[#881313] to-[#ec1a1a] min-w-[500px]">

      </div>
    </div>
  );
}