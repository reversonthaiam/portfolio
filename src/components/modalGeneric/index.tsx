"use client";

import { useEffect } from "react";

interface ModalProps {
  title: string;
  message: string | React.ReactNode;
  onClose: () => void;
  icon?: React.ReactNode;
  show?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  type?: "success" | "error" | "info" | "warning";
}

export const ModalGeneric = ({
  title,
  message,
  onClose,
  icon,
  show = true,
  onConfirm,
  confirmText = "OK",
  type = "info",
}: ModalProps) => {
  // Fecha o modal ao pressionar Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (show) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [show, onClose]);

  if (!show) return null;

  // Cores baseadas no tipo
  const typeColors = {
    success: "text-green-400",
    error: "text-red-400",
    info: "text-blue-400",
    warning: "text-yellow-400",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-md mx-4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header com Ícone */}
        <div className="flex items-center gap-4 mb-6">
          {icon && (
            <div
              className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-${typeColors[type].replace("text-", "")}/10`}
            >
              {icon}
            </div>
          )}
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>

        {/* Message */}
        <div className="text-zinc-400 mb-6">
          {typeof message === "string" ? <p>{message}</p> : message}
        </div>

        {/* Action Button */}
        {onConfirm ? (
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-zinc-600 rounded-md text-zinc-400 hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                type === "success"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              {confirmText}
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className={`w-full py-2 px-4 rounded-md font-medium bg-primary hover:bg-primary/90 text-white transition-colors`}
          >
            {confirmText}
          </button>
        )}
      </div>
    </div>
  );
};
