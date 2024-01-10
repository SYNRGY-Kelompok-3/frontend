interface BreadcrumbItem {
  text: string;
  link?: string;
}

function Breadcrumb({ steps }: { steps: BreadcrumbItem[] }) {
  return (
    <section className="container mx-auto mt-8 max-w-[78rem]">
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
              {index < steps.length - 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumb;
