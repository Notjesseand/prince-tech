"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "2348063636497"; // change to your number (no + sign)
  const message = encodeURIComponent("Hello, I would like to make an enquiry!");

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      className="heartbeat fixed bottom-6 right-6 bg-transparent hover:bg-green-600 text-white p-1 rounded-xl shadow-lg z-50 transition-all flex items-center justify-center"
    >
      {/* <FaWhatsapp size={30} /> */}
      <img src="/whatsapp-icon.png" className="h-16 " alt="" />
    </Link>
  );
}
