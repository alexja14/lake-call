import AgentCard from './AgentCard';
import { agents } from '../data/agents';
import { useState, useEffect } from 'react';

const AgentGrid = () => {
  const [visibleAgents, setVisibleAgents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  
  // Get unique roles for filtering
  const roles = ['All', ...new Set(agents.map(agent => agent.role.split(' ')[0]))];
  
  useEffect(() => {
    // Add animation delay when component mounts
    const timer = setTimeout(() => {
      setVisibleAgents(agents);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Filter agents based on search and role
  const filteredAgents = visibleAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       agent.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All' || agent.role.startsWith(selectedRole);
    return matchesSearch && matchesRole;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input 
              type="text"
              placeholder="Search agents by name or role..."
              className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex overflow-x-auto py-1 gap-2 md:justify-end">
            {roles.slice(0, 6).map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedRole === role 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredAgents.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium text-gray-500">No agents found matching your search</h3>
          <button 
            onClick={() => {setSearchQuery(''); setSelectedRole('All');}}
            className="mt-4 text-primary-600 hover:text-primary-800"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent, index) => (
            <div 
              key={agent.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AgentCard 
                name={agent.name} 
                role={agent.role}
              />
            </div>
          ))}
        </div>
      )}
      
      {filteredAgents.length > 0 && filteredAgents.length < agents.length && (
        <div className="text-center mt-8">
          <span className="text-sm text-gray-500">
            Showing {filteredAgents.length} of {agents.length} agents
          </span>
        </div>
      )}
    </div>
  );
};

export default AgentGrid;