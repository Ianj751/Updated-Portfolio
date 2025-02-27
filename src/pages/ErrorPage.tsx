import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-white mb-4 animate-pulse">
            404
          </h1>
        </div>

        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-primary-a10 blur-xl opacity-50 animate-spin-slow rounded-full"></div>
          <p className="text-2xl text-white relative z-10 font-semibold">
            Oops, this page is missing.
          </p>
        </div>

        <div className="space-y-6 relative z-10">
          <p className="text-lg text-gray-300">Click below to return Home</p>

          <div>
            <Button
              variant="secondary"
              className="mt-4 bg-primary-a0 text-white"
              onClick={() => navigate("/")}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
