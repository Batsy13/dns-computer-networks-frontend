import { Header } from "@/components/widgets/header";
import { UserProfile } from "@/components/widgets/user-profile";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-8">
        <UserProfile />
      </div>
    </>
  );
}