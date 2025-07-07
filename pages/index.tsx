import React from 'react';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Featured Property</h1>
      <Card
        image="/assets/sample-property.jpg"
        title="Modern Loft in City Center"
        description="A beautiful, modern loft located in the heart of the city. Walking distance to all attractions."
        price="$120/night"
        location="New York, NY"
        actionLabel="Book Now"
        onAction={() => alert('Booking!')}
      />
    </div>
  );
}
