import { RegisterForm } from "@/components/features/register-form";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export default function RegisterPage() {
  return (
    <ResizablePanelGroup direction="horizontal" className="grid xl:grid-cols-[1fr_700px] min-h-screen">
      <ResizablePanel defaultSize={35} className="flex justify-center items-center p-8 bg-zinc-50 xl:min-w-[500px]">
        <RegisterForm />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={65} className="hidden xl:block bg-linear-to-bl from-[#881313] to-[#ec1a1a] min-w-[500px]">

      </ResizablePanel>
    </ResizablePanelGroup>
  );
}