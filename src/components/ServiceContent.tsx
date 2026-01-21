import type { AzureService } from '@/types/azure';

interface ServiceContentProps {
  service: AzureService;
}

export function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-3xl">{service.icon}</span>
        <h1 className="text-3xl font-bold">{service.name}</h1>
      </div>

      {/* 1️⃣ Service Overview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-blue-600">1️⃣ Service Overview</h2>
        <div className="bg-card p-4 rounded-lg border">
          <p className="mb-3"><strong>What it is:</strong> {service.overview.whatItIs}</p>
          <p className="mb-3"><strong>Why it is used:</strong> {service.overview.whyUsed}</p>
          <div>
            <strong>Typical use cases:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {service.overview.useCases.map((useCase, index) => (
                <li key={index} className="text-sm">{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2️⃣ Recommended Architecture & Usage Patterns */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-green-600">2️⃣ Recommended Architecture & Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">✅ When to Use</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.architecture.whenToUse.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">❌ When NOT to Use</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.architecture.whenNotToUse.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="font-semibold mb-2">🏗️ Ideal Architectures</h3>
          <ul className="list-disc list-inside space-y-1">
            {service.architecture.idealArchitectures.map((arch, index) => (
              <li key={index} className="text-sm">{arch}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3️⃣ Best Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-purple-600">3️⃣ Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">💰 Cost Optimization</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.bestPractices.costOptimization.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">🔒 Security Best Practices</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.bestPractices.security.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">⚡ Performance & Reliability</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.bestPractices.performanceReliability.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">🔧 Operational Excellence</h3>
            <ul className="list-disc list-inside space-y-1">
              {service.bestPractices.operationalExcellence.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4️⃣ Common Failure Scenarios */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-600">4️⃣ Common Failure Scenarios</h2>
        <div className="space-y-4">
          {service.failureScenarios.map((scenario, index) => (
            <div key={index} className="bg-card p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold mb-2">⚠️ {scenario.scenario}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Why it happens:</strong>
                  <p className="mt-1">{scenario.whyItHappens}</p>
                </div>
                <div>
                  <strong>Symptoms:</strong>
                  <p className="mt-1">{scenario.symptoms}</p>
                </div>
                <div>
                  <strong>Impact:</strong>
                  <p className="mt-1">{scenario.impact}</p>
                </div>
                <div>
                  <strong>Prevention:</strong>
                  <ul className="list-disc list-inside mt-1">
                    {scenario.prevention.map((item, pIndex) => (
                      <li key={pIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8️⃣ Best-Practice Checklist */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-indigo-600">8️⃣ Best-Practice Checklist (Quick View)</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">🔒 Security</h3>
            <div className="space-y-1">
              {service.checklist.security.map((item, index) => (
                <div key={index} className="text-sm">{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">💰 Cost</h3>
            <div className="space-y-1">
              {service.checklist.cost.map((item, index) => (
                <div key={index} className="text-sm">{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">⚡ Performance</h3>
            <div className="space-y-1">
              {service.checklist.performance.map((item, index) => (
                <div key={index} className="text-sm">{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">🛡️ Reliability</h3>
            <div className="space-y-1">
              {service.checklist.reliability.map((item, index) => (
                <div key={index} className="text-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
