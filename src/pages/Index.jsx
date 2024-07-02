import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the UFO Enthusiasts Hub</h1>
        <p className="text-lg">Explore the unknown</p>
        <img src="/images/placeholder.svg" alt="Hero" className="mx-auto" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          Welcome to the UFO Enthusiasts Hub, your go-to destination for all things related to unidentified flying objects. Whether you're a seasoned UFO hunter or just curious about the unknown, our community is here to support and inform you.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Sightings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Sighting 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/placeholder.svg" alt="Sighting 1" />
              <p>Brief description of the sighting.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/placeholder.svg" alt="Sighting 2" />
              <p>Brief description of the sighting.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/placeholder.svg" alt="Sighting 3" />
              <p>Brief description of the sighting.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Join the Community</h2>
        <Button onClick={() => navigate("/contact")}>Join Now</Button>
      </section>
    </div>
  );
};

export default Index;