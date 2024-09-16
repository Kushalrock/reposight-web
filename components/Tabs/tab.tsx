import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import IssueCard from "@/components/ui/IssueCard/IssueCard"

// Define props interface
interface TabsDemoProps {
  repoId: string;
  difficulty: string; // Add difficulty prop
}

// Use the props in the component
export function TabsDemo({ repoId, difficulty }: TabsDemoProps): JSX.Element {
  return (
    <Tabs defaultValue="beginner" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="beginner">Beginner</TabsTrigger>
        <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="beginner">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Beginner Level</h2>
          <IssueCard repoId={repoId} difficulty={difficulty} /> 
          
        </div>
      </TabsContent>

      <TabsContent value="intermediate">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Intermediate Level</h2>
          <IssueCard repoId={repoId} difficulty={difficulty} /> 
          
        </div>
      </TabsContent>

      <TabsContent value="advanced">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Advanced Level</h2>
          <IssueCard repoId={repoId} difficulty={difficulty} /> 
        
        </div>
      </TabsContent>
    </Tabs>
  );
}
