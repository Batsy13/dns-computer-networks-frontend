import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/widgets/app-sidebar";
import { UserProfile } from "@/components/widgets/user-profile";

export default function ProfilePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex items-center justify-center p-8 w-full bg-[#f4f4f4]">
        <UserProfile />
      </div>
    </SidebarProvider>
  );
}