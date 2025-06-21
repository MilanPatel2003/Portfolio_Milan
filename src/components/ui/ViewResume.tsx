import React, { useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const ResumeDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] bg-black/80 backdrop-blur-sm border-white/20 text-white flex flex-col !z-[1100]">
        <DialogHeader>
          <DialogTitle>My Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-grow rounded-lg overflow-hidden">
          <iframe
            src="/Milans_latest_Resume.pdf"
            className="w-full h-full"
            title="Milan's Resume"
          />
        </div>
        <DialogFooter className="mt-4 flex flex-col sm:flex-row sm:justify-end gap-2">
          <a href="/Milans_latest_Resume.pdf" download className="w-full sm:w-auto">
            <ShimmerButton className="w-full py-2 px-4 text-sm">
              Download Resume
            </ShimmerButton>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDialog; 