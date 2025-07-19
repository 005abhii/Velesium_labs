import Link from "next/link";
import WorkItem from "./work-item";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";
interface ProjectDataItem {
  id: number;
  type: "project";
  title: string;
  description: string;
  year: number;
  imageUrl: string;
  imageAlt: string;
  imageBgColor: string;
  marginTop: string;
}

interface ArrowDataItem {
  id: number;
  type: "arrow";
  arrowType: "down" | "diagonal";
  arrowText?: string;
  marginTop: string;
}

type WorkDataItem = ProjectDataItem | ArrowDataItem;

export default function ObysWorksPage() {
  const worksData: WorkDataItem[] = [
    {
      id: 1,
      type: "project",
      title: "OLGA PRUDKA",
      description: "Logo design, Website design, Development",
      year: 2023,
      imageUrl: "/placeholder.svg?height=300&width=400&text=OLGA%20PRUDKA",
      imageAlt: "OLGA PRUDKA project",
      imageBgColor: "bg-[#E0E0E0]",
      marginTop: "mt-0 md:mt-0 lg:mt-0", // Top-left, no offset
    },
    {
      id: 2,
      type: "project",
      title: "AIM",
      description: "Logo design, Website design, Development",
      year: 2024,
      imageUrl: "/placeholder.svg?height=300&width=400",
      imageAlt: "AIM project",
      imageBgColor: "bg-[#D0CFCB]",
      marginTop: "mt-8 md:mt-8 lg:mt-[4rem]", // a little lower
    },
    {
      id: 3,
      type: "arrow",
      arrowType: "down",
      arrowText: "David Laxer",
      marginTop: "mt-12 md:mt-20 lg:mt-[3rem]", // sits near AIM
    },
    {
      id: 4,
      type: "arrow",
      arrowType: "diagonal",
      marginTop: "mt-0 md:mt-0 lg:-mt-[20rem]", // pull up high
    },
    {
      id: 5,
      type: "project",
      title: "GRIDS",
      description: "Logo design, Website design, Development",
      year: 2024,
      imageUrl: "/placeholder.svg?height=300&width=400",
      imageAlt: "GRIDS project",
      imageBgColor: "bg-white",
      marginTop: "mt-12 md:mt-16 lg:mt-[10rem]",
    },
    {
      id: 6,
      type: "project",
      title: "WE ARE LAXER",
      description: "Logo design, Website design, Development",
      year: 2024,
      imageUrl: "/placeholder.svg?height=300&width=400",
      imageAlt: "WE ARE LAXER project",
      imageBgColor: "bg-gray-700",
      marginTop: "mt-8 md:mt-12 lg:mt-[20rem]",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <CustomCursor />
      <Header />
      <BackgroundManager />

      {/* Grid icon */}

      {/* Works Grid Section */}
      <section className="container mx-auto px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {worksData.map((item) => (
            <div key={item.id} className={`${item.marginTop}`}>
              <WorkItem {...item} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
