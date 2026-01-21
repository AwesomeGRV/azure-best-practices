import { useState } from 'react';
import { ServiceSelector } from '@/components/ServiceSelector';
import { ServiceContent } from '@/components/ServiceContent';
import type { AzureService } from '@/types/azure';

function App() {
  const [selectedService, setSelectedService] = useState<AzureService | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Selection Panel */}
          <div className="lg:w-1/3">
            <ServiceSelector 
              onServiceSelect={setSelectedService}
              selectedService={selectedService}
            />
          </div>

          {/* Content Display Panel */}
          <div className="lg:w-2/3">
            {selectedService ? (
              <ServiceContent service={selectedService} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">☁️</div>
                  <h2 className="text-2xl font-semibold mb-2">Welcome to Azure Best Practices</h2>
                  <p className="text-lg">Select an Azure service from the left to view detailed best practices, guidance, and recommendations.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
