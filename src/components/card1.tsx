import React, { useState, useEffect } from 'react';
import { Folder } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { countAssignmentFolders } from "@/lib/getassignments"

const FolderCountCard = () => {
  const [folderCount, setFolderCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFolderCount = async () => {
      try {
        const count = await countAssignmentFolders();
        setFolderCount(count);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch folder count:', error);
        setIsLoading(false);
      }
    };

    fetchFolderCount();
  }, []);

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Folder tugas</CardTitle>
        <Folder className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {isLoading ? 'Loading...' : folderCount}
        </div>
        <p className="text-xs text-muted-foreground">
          Jumlah tugas
        </p>
      </CardContent>
    </Card>
  );
};

export default FolderCountCard;