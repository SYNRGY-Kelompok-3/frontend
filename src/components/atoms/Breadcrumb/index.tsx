import Image from "../Img";
import ChevronRight from "../../../assets/ChevronRight.svg";

interface BreadcrumbItem {
  text: string;
  link?: string;
}

function Breadcrumb({ steps }: { steps: BreadcrumbItem[] }) {
  return (
    <section className="container mx-auto mt-5 max-w-[78rem]">
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center">
              {step.link ? (
                <a href={step.link} className="font-semibold text-black hover:underline">
                  {step.text}
                </a>
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
