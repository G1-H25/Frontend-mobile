import { createContext, useContext, useEffect, useState } from "react";
import { Package } from "../types/types";

type PackagesContextType = {
  packages: Package[];
  loading: boolean;
  error: string | null;
};

const PackagesContext = createContext<PackagesContextType>({
  packages: [],
  loading: true,
  error: null,
});

export const PackagesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${API_URL}orders`);
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const data: Package[] = await response.json();
        setPackages(data);
        console.log(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <PackagesContext.Provider value={{ packages, loading, error }}>
      {children}
    </PackagesContext.Provider>
  );
};

export const usePackages = () => useContext(PackagesContext);
