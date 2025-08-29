import { Card } from "@/components/ui/card";

interface AdPlaceholderProps {
  size: "banner" | "sidebar" | "content";
  className?: string;
}

export function AdPlaceholder({ size, className }: AdPlaceholderProps) {
  const dimensions = {
    banner: { width: "728x90", height: "h-24" },
    sidebar: { width: "160x600", height: "h-[600px]" },
    content: { width: "728x90", height: "h-24" }
  };

  const { width, height } = dimensions[size];

  return (
    <Card 
      className={`ad-placeholder ${height} w-full flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed ${className}`}
      data-testid={`ad-placeholder-${size}`}
    >
      <div className="text-center">
        <i className="fas fa-ad text-2xl mb-2" />
        <div className="text-sm">
          Advertisement<br />
          ({width})
        </div>
      </div>
    </Card>
  );
}
