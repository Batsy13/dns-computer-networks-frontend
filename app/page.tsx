import { LoginForm } from "@/components/features/login-form";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function LoginPage() {
  return (
    <ResizablePanelGroup direction="horizontal" className="grid xl:grid-cols-[1fr_700px] min-h-screen">
      <ResizablePanel defaultSize={65} className="hidden xl:block bg-linear-to-br from-[#881313] to-[#ec1a1a] min-w-[500px]">

      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={35} className="flex justify-center items-center p-8 bg-zinc-50 xl:min-w-[500px]">
        <LoginForm />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}