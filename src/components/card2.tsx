import React, { useState, useEffect } from 'react';
import user, { User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { countClassFolders } from '@/lib/getclass';

const KelasCountCard = () => {
  const [kelasCount, setKelasCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchKelasCount = async () => {
      try {
        const count = await countClassFolders();
        setKelasCount(count);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch kelas count:', error);
        setIsLoading(false);
      }
    };

    fetchKelasCount();
  }, []);

  return (
    <Card className="w-full max-w-56 h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Kelas</CardTitle>
        <User className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">
          {isLoading ? 'Loading...' : kelasCount}
        </div>
        <p className="text-xs text-muted-foreground">
          Jumlah kelas
        </p>
      </CardContent>
    </Card>
  );
};

export default KelasCountCard;