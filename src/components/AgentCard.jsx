const AgentCard = ({ name, role }) => {
  // Generate a color based on the agent name for visual variety
  const generateColorClass = (name) => {
    const colorClasses = [
      'bg-blue-100 border-blue-500',
      'bg-green-100 border-green-500',
      'bg-purple-100 border-purple-500',
      'bg-yellow-100 border-yellow-500',
      'bg-pink-100 border-pink-500',
      'bg-indigo-100 border-indigo-500',
      'bg-red-100 border-red-500',
      'bg-teal-100 border-teal-500'
    ];
    
    // Use the name's characters to select a color class
    const index = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % colorClasses.length;
    return colorClasses[index];
  };
  
  const cardColorClass = generateColorClass(name);
  
  return (
    <div className={`p-4 rounded-lg shadow-md border-l-4 ${cardColorClass} transition-transform hover:scale-105`}>
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-700">{role}</p>
      <div className="mt-4 flex justify-end">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default AgentCard;