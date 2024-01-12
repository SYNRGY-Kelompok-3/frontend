interface Step {
  text: string;
  isActive?: boolean;
}

function Steps({ steps }: { steps: Step[] }) {
  return (
    <section className="container mx-auto mt-4">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <>
            {index > 0 && (
              <span className={`mx-1 ${index === 1 ? "text-green-500" : "text-blue-500"}`}>
                &bull; &bull; &bull; &bull;
              </span>
            )}
            <button
              key={index}
              className={`flex items-center rounded-full py-1 pl-2 pr-3 ${
                step.isActive ? "bg-blue-500 text-white" : "bg-green-500 text-white"
              } ${index < steps.length - 1 ? "" : ""}`}
              disabled={!step.isActive}
            >
              <button
                className={`w-8 h-8 flex items-center justify-center border-2 rounded-full ${
                  step.isActive
                    ? "border-blue-500 text-blue-500 bg-white"
                    : "border-green-500 text-green-500 bg-white"
                }`}
                disabled={!step.isActive}
              >
                {step.isActive ? (
                  <span>{index + 1}</span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </button>
              <span
                className={`text-sm ml-2 ${
                  step.isActive ? "font-semibold text-white" : "font-normal text-white"
                }`}
              >
                {step.text}
              </span>
            </button>
          </>
        ))}
      </div>
    </section>
  );
}

export default Steps;
