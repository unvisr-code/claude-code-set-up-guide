import { AlertTriangle, Info, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "warning" | "success";

interface AlertProps {
  variant?: AlertVariant;
  children: React.ReactNode;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; icon: string; iconBg: string }> = {
  info: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  warning: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    icon: "text-yellow-400",
    iconBg: "bg-yellow-500/20",
  },
  success: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: "text-green-400",
    iconBg: "bg-green-500/20",
  },
};

const icons: Record<AlertVariant, React.ElementType> = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
};

export default function Alert({ variant = "info", children }: AlertProps) {
  const styles = variantStyles[variant];
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border my-4",
        styles.bg,
        styles.border
      )}
    >
      <div className={cn("p-1.5 rounded-md shrink-0", styles.iconBg)}>
        <Icon className={cn("w-4 h-4", styles.icon)} />
      </div>
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}
