"use client";

import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const HolidayGreeting = () => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // 10 second timeout
    const timer = setTimeout(() => {
      setOpen(true);
      setShowConfetti(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    // Stop confetti after a few seconds or immediately
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={500}
          gravity={0.15}
          colors={["#f97316", "#ffffff", "#fbbf24", "#ef4444"]} // Orange, White, Gold, Red
          style={{ zIndex: 300 }}
        />
      )}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-[#1a1a1a] border-2 border-orange-500 max-w-[90vw] sm:max-w-lg">
          <AlertDialogHeader className="flex flex-col items-center text-center">
            <div className="text-6xl mb-4 jello-horizontal ">🎁</div>
            <AlertDialogTitle className="text-3xl font-bold text-white font-montserrat">
              Happy Holidays!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300 text-lg pt-4">
              As we wrap up an incredible year, the team at{" "}
              <span className="text-orange-500 font-bold">
                Princetech Electricals & General Services
              </span>{" "}
              wants to thank you for your support.
              <br />
              <br />
              May your holidays be bright and your New Year be filled with
              success and new opportunities!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center mt-6">
            <AlertDialogAction
              onClick={handleClose}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-xl text-lg transition-all"
            >
              Happy New Year!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HolidayGreeting;
