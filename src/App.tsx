import { useState } from 'react';
import { ServiceSelector } from '@/components/ServiceSelector';
import ServiceContent from '@/components/ServiceContent';
import type { AzureService } from '@/types/azure';

function App() {
  const [selectedService, setSelectedService] = useState<AzureService | undefined>(undefined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
          <div className="lg:w-2/3 h-[calc(100vh-8rem)]">
            <ServiceContent service={selectedService || null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
