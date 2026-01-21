import { azureServices } from '@/data/azureServices';
import type { AzureService } from '@/types/azure';
import { Button } from '@/components/ui/button';

interface ServiceSelectorProps {
  onServiceSelect: (service: AzureService) => void;
  selectedService?: AzureService;
}

export function ServiceSelector({ onServiceSelect, selectedService }: ServiceSelectorProps) {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">Azure Services Best Practices</h2>
      <div className="grid gap-3">
        {azureServices.map((service) => (
          <Button
            key={service.id}
            variant={selectedService?.id === service.id ? "default" : "outline"}
            className="h-auto p-4 justify-start text-left"
            onClick={() => onServiceSelect(service)}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{service.icon}</span>
              <div>
                <div className="font-semibold">{service.name}</div>
                <div className="text-sm text-muted-foreground">
                  {service.overview.whatItIs.substring(0, 60)}...
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
