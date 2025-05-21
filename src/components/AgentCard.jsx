const AgentCard = ({ name, role }) => {
  // Generate a color based on the agent name for visual variety
  const generateColorClass = (name) => {
    const colorClasses = [
      {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        accent: 'bg-blue-500',
        text: 'text-blue-800'
      },
      {
        bg: 'bg-green-50',
        border: 'border-green-200',
        accent: 'bg-green-500',
        text: 'text-green-800'
      },
      {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        accent: 'bg-purple-500',
        text: 'text-purple-800'
      },
      {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        accent: 'bg-amber-500',
        text: 'text-amber-800'
      },
      {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        accent: 'bg-pink-500',
        text: 'text-pink-800'
      },
      {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        accent: 'bg-indigo-500',
        text: 'text-indigo-800'
      },
      {
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        accent: 'bg-sky-500',
        text: 'text-sky-800'
      },
      {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        accent: 'bg-teal-500',
        text: 'text-teal-800'
      }
    ];
    
    // Use the name's characters to select a color class
    const index = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % colorClasses.length;
    return colorClasses[index];
  };
  
  const cardColor = generateColorClass(name);
  
  return (
    <div className={`agent-card rounded-2xl ${cardColor.bg} border ${cardColor.border} overflow-hidden shadow-modern flex flex-col h-full`}>
      {/* Top accent bar */}
      <div className={`h-1 w-full ${cardColor.accent}`}></div>
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-xl shadow-md flex items-center justify-center font-bold text-xl ${cardColor.accent} text-white`}>
              {name.charAt(0)}
            </div>
          </div>
          
          <div className="ml-4 flex-grow">
            <h3 className={`font-display font-bold text-xl ${cardColor.text}`}>{name}</h3>
            <p className="text-gray-600 text-sm mt-1">{role}</p>
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="space-y-2">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${cardColor.accent}`}></div>
              <span className="text-sm text-gray-600">Advanced AI Processing</span>
            </div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${cardColor.accent}`}></div>
              <span className="text-sm text-gray-600">24/7 Availability</span>
            </div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${cardColor.accent}`}></div>
              <span className="text-sm text-gray-600">Custom Integration</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className={`btn-modern rounded-lg px-4 py-2 ${cardColor.bg} border ${cardColor.border} ${cardColor.text} hover:shadow-md transition-all duration-300`}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;