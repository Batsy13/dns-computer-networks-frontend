import { LoginForm } from "@/components/features/login-form";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function LoginPage() {
  return (
    <div className="grid xl:grid-cols-[1fr_700px] min-h-screen">
      <div className="hidden xl:block bg-linear-to-br from-[#881313] to-[#ec1a1a] min-w-[500px]">

      </div>
      <div className="flex justify-center items-center p-8 bg-zinc-50 xl:min-w-[500px]">
        <LoginForm />
      </div>
    </div>
  );
}