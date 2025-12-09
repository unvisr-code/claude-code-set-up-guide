import CodeBlock from "./CodeBlock";
import Alert from "./Alert";

export interface Step {
  number: number;
  title: string;
  description: string;
  instructions: string[];
  codeBlocks?: { code: string; description?: string }[];
  alerts?: { variant: "info" | "warning" | "success"; message: string }[];
  alternativeCode?: { code: string; description: string };
  troubleshooting?: {
    title: string;
    description: string;
    steps: { instruction: string; code?: string }[];
  };
}

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
      {/* Step header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-bold text-lg shrink-0">
          {step.number}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{step.description}</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
          실행 순서
        </h4>
        <ol className="space-y-4">
          {step.instructions.map((instruction, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-gray-400 text-xs font-medium shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: instruction }}
              />
            </li>
          ))}
        </ol>
      </div>

      {/* Code blocks */}
      {step.codeBlocks && step.codeBlocks.length > 0 && (
        <div className="space-y-6 mb-6">
          {step.codeBlocks.map((block, index) => (
            <div key={index}>
              {block.description && (
                <p className="text-sm text-gray-400 mb-2 font-medium">{block.description}</p>
              )}
              <CodeBlock code={block.code} />
            </div>
          ))}
        </div>
      )}

      {/* Alerts */}
      {step.alerts && step.alerts.length > 0 && (
        <div className="space-y-4 mt-6">
          {step.alerts.map((alert, index) => (
            <Alert key={index} variant={alert.variant}>
              {alert.message}
            </Alert>
          ))}
        </div>
      )}

      {/* Alternative code */}
      {step.alternativeCode && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-3 font-medium">
            {step.alternativeCode.description}
          </p>
          <CodeBlock code={step.alternativeCode.code} />
        </div>
      )}

      {/* Troubleshooting */}
      {step.troubleshooting && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-5 md:p-6">
            <h4 className="text-base md:text-lg font-bold text-yellow-400 mb-2">
              {step.troubleshooting.title}
            </h4>
            <p className="text-sm text-gray-400 mb-5">
              {step.troubleshooting.description}
            </p>
            <div className="space-y-5">
              {step.troubleshooting.steps.map((item, index) => (
                <div key={index}>
                  <p
                    className="text-sm text-gray-300 mb-2 font-medium"
                    dangerouslySetInnerHTML={{ __html: `${index + 1}. ${item.instruction}` }}
                  />
                  {item.code && <CodeBlock code={item.code} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
