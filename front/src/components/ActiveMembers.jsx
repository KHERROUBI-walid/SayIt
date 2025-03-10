import React from 'react';

function ActiveMembers() {
  const colors = ['#4D61F4', '#D7FF7B', '#FFFFFF', '#000000'];

  return (
    <div className="active-members">
      <h3>Membres actifs</h3>
      <div className="colors">
        {colors.map(color => (
          <div 
            key={color} 
            className="color-circle" 
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ActiveMembers;
