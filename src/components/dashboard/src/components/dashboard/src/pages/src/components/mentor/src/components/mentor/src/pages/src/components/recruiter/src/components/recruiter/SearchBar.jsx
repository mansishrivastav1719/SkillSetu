import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={searchContainerStyles}>
      <div style={searchBoxStyles}>
        <span style={searchIconStyles}>🔍</span>
        <input
          type="text"
          placeholder="Search by name, skills, or role..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={searchInputStyles}
        />
        {searchTerm && (
          <button 
            onClick={() => onSearchChange('')}
            style={clearButtonStyles}
          >
            ✕
          </button>
        )}
      </div>
      
      {/* Search Tips */}
      <div style={tipsStyles}>
        <span style={tipsTextStyles}>💡 Try searching for: </span>
        <button 
          onClick={() => onSearchChange('React')}
          style={tipButtonStyles}
        >
          React
        </button>
        <button 
          onClick={() => onSearchChange('JavaScript')}
          style={tipButtonStyles}
        >
         
