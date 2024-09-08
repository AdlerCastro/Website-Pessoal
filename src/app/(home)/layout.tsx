import Footer from "@/components/templates/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
