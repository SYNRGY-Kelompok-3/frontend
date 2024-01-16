import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  text: string;
  link?: string;
}

function Breadcrumb({ steps }: { steps: BreadcrumbItem[] }) {
  return (
    <section className="container mx-28 mt-8 max-w-[78rem]">
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center">
              {step.link ? (
                <Link to={step.link} className="font-semibold text-black">
                  <div>{step.text}</div>
                </Link>
              ) : (
                <span className="font-semibold text-blue-500">{step.text}</span>
              )}
              {index < steps.length - 1 && <Image src={ChevronRight} alt={"chevron"} className={""} />}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumb;
