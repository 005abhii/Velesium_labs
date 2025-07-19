import Image from "next/image";
import { ArrowDown, ArrowDownRight } from "lucide-react";

interface WorkItemProps {
  type: "project" | "arrow";
  title?: string;
  description?: string;
  year?: number;
  imageUrl?: string;
  imageAlt?: string;
  imageBgColor?: string;
  arrowType?: "down" | "diagonal";
  arrowText?: string;
}

export default function WorkItem({
  type,
  title,
  description,
  year,
  imageUrl,
  imageAlt,
  imageBgColor,
  arrowType,
  arrowText,
}: WorkItemProps) {
  if (type === "project") {
    return (
      <div className="flex flex-col h-full border border-transparent hover:border-white transition-colors duration-300 p-4">
        {imageUrl && (
          <div
            className={`w-full h-64 flex items-center justify-center ${imageBgColor} overflow-hidden`}
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt || title || "Project image"}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="pt-4 flex flex-col flex-grow">
          {title && (
            <h2 className="text-2xl font-bold mb-2 uppercase">{title}</h2>
          )}
          <div className="mt-auto pt-4 border-t border-white flex justify-between items-end">
            <p className="text-sm text-gray-300">{description}</p>
            {year && <span className="text-sm text-gray-300">{year}</span>}
          </div>
        </div>
      </div>
    );
  } else if (type === "arrow") {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-48 h-48 rounded-full border border-white flex items-center justify-center">
          {arrowType === "down" && (
            <ArrowDown className="w-16 h-16 text-white" />
          )}
          {arrowType === "diagonal" && (
            <ArrowDownRight className="w-16 h-16 text-white" />
          )}
        </div>
        {arrowText && (
          <p className="mt-4 text-2xl font-bold text-white text-center">
            {arrowText}
          </p>
        )}
      </div>
    );
  }
  return null;
}
