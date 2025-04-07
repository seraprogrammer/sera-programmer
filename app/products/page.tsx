import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// You would replace this with actual product images
const olovaLogo = "https://olova.js.org/olova.png";

const products = [
  {
    id: 1,
    name: "Olova",
    description:
      "A lightweight and powerful JavaScript library for modern web applications",
    logo: olovaLogo,
    tags: ["JavaScript", "Frontend", "Library"],
    github: "https://github.com/olovajs/olova",
    website: "https://olova.js.org/",
    featured: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <Package className="mr-1 h-3 w-3" />
          Our Solutions
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Products by SeraProgrammer
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our innovative tools and libraries designed to enhance your
          development experience and solve complex problems with elegant
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col h-full transition-all hover:shadow-md"
          >
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle className="text-center">{product.name}</CardTitle>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 pt-2">
              {product.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              )}
              {product.website && (
                <Button size="sm" asChild>
                  <Link
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {products.length === 1 && (
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            We're constantly working on new products to enhance your development
            experience. Stay tuned for more exciting releases from
            SeraProgrammer!
          </p>
        </div>
      )}
    </div>
  );
}
