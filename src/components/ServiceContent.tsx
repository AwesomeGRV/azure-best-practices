import React from 'react';
import type { AzureService } from '@/types/azure';
import { CheckCircle, AlertTriangle, Shield, Database, Activity, Zap, Server, MessageSquare, Cloud, Globe, Container, Code } from 'lucide-react';

interface ServiceContentProps {
  service: AzureService | null;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  if (!service) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
        <div className="text-center p-12">
          <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Database className="w-12 h-12 text-slate-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Select an Azure Service</h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Choose a service from the left panel to view comprehensive best practices and guidance
          </p>
        </div>
      </div>
    );
  }

  const SectionCard = ({ title, icon: Icon, children, bgGradient, delay = 0 }: any) => (
    <div 
      className={`${bgGradient} rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );

  const FailureCard = ({ failure }: any) => (
    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-xl p-6 mb-4 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-red-800 mb-2 text-lg">{failure.scenario}</h4>
          
          <div className="bg-white rounded-lg p-4 mb-3">
            <p className="text-red-700 font-semibold mb-1">🔴 Real-World Example:</p>
            <p className="text-red-600 text-sm leading-relaxed">{failure.realExample}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-semibold text-red-700">Symptoms:</span>
              <p className="text-red-600">{failure.symptoms}</p>
            </div>
            <div>
              <span className="font-semibold text-red-700">Impact:</span>
              <p className="text-red-600">{failure.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                {service.name}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">{service.overview.whatItIs}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Overview Section */}
          <SectionCard 
            title="Service Overview" 
            icon={Database}
            bgGradient="bg-gradient-to-br from-blue-500 to-blue-600"
            delay={100}
          >
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-blue-100 mb-2">💡 Why Use It?</h4>
                <p className="text-white leading-relaxed">{service.overview.whyUsed}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-blue-100 mb-3">🎯 Key Use Cases</h4>
                <div className="space-y-2">
                  {service.overview.useCases.slice(0, 3).map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-200 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Architecture Section */}
          <SectionCard 
            title="Architecture & Usage" 
            icon={Activity}
            bgGradient="bg-gradient-to-br from-purple-500 to-purple-600"
            delay={200}
          >
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-purple-100 mb-2">✅ When to Use</h4>
                <ul className="space-y-1">
                  {service.architecture.whenToUse.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-white text-sm flex items-start">
                      <span className="text-purple-200 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-purple-100 mb-2">❌ Avoid When</h4>
                <ul className="space-y-1">
                  {service.architecture.whenNotToUse.slice(0, 2).map((item, index) => (
                    <li key={index} className="text-white text-sm flex items-start">
                      <span className="text-purple-200 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Best Practices */}
          <SectionCard 
            title="Best Practices" 
            icon={Shield}
            bgGradient="bg-gradient-to-br from-green-500 to-green-600"
            delay={300}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-green-100 mb-2">💰 Cost</h4>
                <ul className="space-y-1">
                  {service.bestPractices.costOptimization.slice(0, 2).map((item, index) => (
                    <li key={index} className="text-white text-xs flex items-start">
                      <span className="text-green-200 mr-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-green-100 mb-2">🔒 Security</h4>
                <ul className="space-y-1">
                  {service.bestPractices.security.slice(0, 2).map((item, index) => (
                    <li key={index} className="text-white text-xs flex items-start">
                      <span className="text-green-200 mr-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-green-100 mb-2">⚡ Performance</h4>
                <ul className="space-y-1">
                  {service.bestPractices.performanceReliability.slice(0, 2).map((item, index) => (
                    <li key={index} className="text-white text-xs flex items-start">
                      <span className="text-green-200 mr-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-green-100 mb-2">🔧 Operations</h4>
                <ul className="space-y-1">
                  {service.bestPractices.operationalExcellence.slice(0, 2).map((item, index) => (
                    <li key={index} className="text-white text-xs flex items-start">
                      <span className="text-green-200 mr-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Real Failure Examples */}
          <SectionCard 
            title="Real Failure Scenarios" 
            icon={AlertTriangle}
            bgGradient="bg-gradient-to-br from-red-500 to-red-600"
            delay={400}
          >
            <div className="space-y-4">
              {service.failureScenarios.map((failure, index) => (
                <FailureCard key={index} failure={failure} index={index} />
              ))}
            </div>
          </SectionCard>

          {/* Anti-Patterns */}
          <SectionCard 
            title="Anti-Patterns to Avoid" 
            icon={AlertTriangle}
            bgGradient="bg-gradient-to-br from-orange-500 to-orange-600"
            delay={500}
          >
            <div className="space-y-3">
              {service.antiPatterns.map((pattern, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-orange-100 mb-2">⚠️ {pattern.pattern}</h4>
                  <p className="text-white text-sm mb-2">{pattern.description}</p>
                  <div className="bg-orange-900/30 rounded-lg p-2">
                    <p className="text-orange-200 text-xs">💥 Consequence: {pattern.consequences}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Monitoring */}
          <SectionCard 
            title="Monitoring & Alerts" 
            icon={Activity}
            bgGradient="bg-gradient-to-br from-indigo-500 to-indigo-600"
            delay={600}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-indigo-100 mb-2">📊 Key Metrics</h4>
                <ul className="space-y-1">
                  {service.monitoringAlerts.metrics.slice(0, 3).map((metric, index) => (
                    <li key={index} className="text-white text-xs">• {metric}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-indigo-100 mb-2">🚨 Alert Thresholds</h4>
                <ul className="space-y-1">
                  {service.monitoringAlerts.alertThresholds.slice(0, 2).map((threshold, index) => (
                    <li key={index} className="text-white text-xs">• {threshold}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Quick Checklist */}
          <SectionCard 
            title="Quick Checklist" 
            icon={CheckCircle}
            bgGradient="bg-gradient-to-br from-teal-500 to-teal-600"
            delay={700}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-teal-100 mb-2">🔒 Security</h4>
                <ul className="space-y-1">
                  {service.checklist.security.map((item, index) => (
                    <li key={index} className="text-white text-xs">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-teal-100 mb-2">⚡ Performance</h4>
                <ul className="space-y-1">
                  {service.checklist.performance.map((item, index) => (
                    <li key={index} className="text-white text-xs">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-teal-100 mb-2">💰 Cost</h4>
                <ul className="space-y-1">
                  {service.checklist.cost.map((item, index) => (
                    <li key={index} className="text-white text-xs">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-teal-100 mb-2">🛡️ Reliability</h4>
                <ul className="space-y-1">
                  {service.checklist.reliability.map((item, index) => (
                    <li key={index} className="text-white text-xs">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
