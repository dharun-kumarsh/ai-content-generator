"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('');

  const handleSearch = (value: string) => {
    setUserSearchInput(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Search Section */}
        <SearchSection onSearchInput={handleSearch} />

        {/* Template List Section */}
        <TemplateListSection userSearchInput={userSearchInput} />
      </div>
    </div>
  )
}

export default Dashboard