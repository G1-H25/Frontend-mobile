export type Package = {
  sändningsnr: number;
  rutt: string;

  expectedTemp: {
    min: number;
    max: number;
  };

  currentTemp: number;
  currentHumidity: number;

  minTempMeasured: number;
  maxTempMeasured: number;
  minHumidityMeasured: number;
  maxHumidityMeasured: number;

  expectedHumidity: {
    min: number;
    max: number;
  };

  timeOutsideRange: number;

  status: {
    text: string;
    timestamp: string; // ISO date string
  };

  transport: {
    id: number;
    name: string;
  };

  sender: {
    id: number;
    name: string;
    adress1: string;
  };
};
