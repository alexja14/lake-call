import AgentCard from './AgentCard';
import { agents } from '../data/agents';

const AgentGrid = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Agents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <AgentCard 
            key={agent.id} 
            name={agent.name} 
            role={agent.role}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentGrid;