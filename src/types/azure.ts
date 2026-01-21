export interface BestPractices {
  costOptimization: string[];
  security: string[];
  performanceReliability: string[];
  operationalExcellence: string[];
}

export interface FailureScenario {
  scenario: string;
  whyItHappens: string;
  symptoms: string;
  impact: string;
  realExample: string;
  prevention: string[];
}

export interface AntiPattern {
  pattern: string;
  description: string;
  consequences: string;
}

export interface MonitoringAlert {
  metrics: string[];
  logs: string[];
  alertThresholds: string[];
  azureServices: string[];
}

export interface Checklist {
  security: string[];
  cost: string[];
  performance: string[];
  reliability: string[];
}

export interface MaturityLevel {
  level: string;
  description: string;
  setup: string[];
}

export interface AzureService {
  id: string;
  name: string;
  icon: string;
  overview: {
    whatItIs: string;
    whyUsed: string;
    useCases: string[];
  };
  architecture: {
    whenToUse: string[];
    whenNotToUse: string[];
    idealArchitectures: string[];
  };
  bestPractices: BestPractices;
  failureScenarios: FailureScenario[];
  antiPatterns: AntiPattern[];
  monitoringAlerts: MonitoringAlert;
  checklist: Checklist;
  maturityLevels: MaturityLevel[];
}
