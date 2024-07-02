import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Sightings = () => {
  const [filter, setFilter] = useState("");

  const sightings = [
    { id: 1, title: "Sighting 1", date: "2023-01-01", location: "Location 1", description: "Description 1" },
    { id: 2, title: "Sighting 2", date: "2023-02-01", location: "Location 2", description: "Description 2" },
    { id: 3, title: "Sighting 3", date: "2023-03-01", location: "Location 3", description: "Description 3" },
  ];

  const filteredSightings = sightings.filter(sighting =>
    sighting.title.toLowerCase().includes(filter.toLowerCase()) ||
    sighting.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">UFO Sightings</h1>
        <Input
          placeholder="Filter by title or location"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSightings.map(sighting => (
          <Card key={sighting.id}>
            <CardHeader>
              <CardTitle>{sighting.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/placeholder.svg" alt={sighting.title} />
              <p><strong>Date:</strong> {sighting.date}</p>
              <p><strong>Location:</strong> {sighting.location}</p>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Sightings;