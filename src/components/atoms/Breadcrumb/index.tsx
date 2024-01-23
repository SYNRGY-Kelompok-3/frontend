import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  text: string;
  link?: string;
}

function Breadcrumb({ steps }: { steps: BreadcrumbItem[] }) {
  return (
    <section className="container mx-8 mt-8 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-28">
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex p-0 list-none">
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
