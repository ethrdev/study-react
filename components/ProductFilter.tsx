"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Interface für das Produkt
interface Product {
  colour: string;
  uid: string;
  image: { url: string; label: string };
  name: string;
  price: number;
};

// Hilfsfunktion, um die Farben aus den Produkten zu extrahieren
// Diese Funktion nimmt die Produktliste und den Schlüssel (key) als Parameter und gibt alle einzigartigen Werte des Schlüssels zurück
// Dafür wird new Set() verwendet um doppelte Werte zu entfernen
// Wir fügen "Alle" hinzu um sicherzustellen, dass der User immer die Möglichkeit hat alle Produkte zu sehen
const getUniqueValues = (products: any[], key: string) => {
  return ["Alle", ...new Set(products.map(product => product[key]))];
};

// FilterButton Component (Child Component)
const FilterButton = ({ filter, setFilter, label }: { filter: string; setFilter: (filter: string) => void; label: string }) => {
  return (
    <button className="border border-gray-300 rounded-md p-2" onClick={() => setFilter(filter)}>
      {label}
    </button>
  );
};
// Parent Component
export default function ProductFilter({ products }: { products: Product[] }) {
  // State, um das ausgewählte Filterkriterium zu speichern
  // Wir haben zwei separate States: selectedGender und selectedColour
  // Jeder Filter Button setzt einen der beiden States
  const [selectedGenderFilter, setSelectedGenderFilter] = useState("Alle");
  const [selectedColourFilter, setSelectedColourFilter] = useState("Alle");

  // Dynamische Filter-Optionen aus den Produkten abgeleiten
  const colours = getUniqueValues(products, "colour");

  // Funktion zum Filtern der Produkte basierend auf dem ausgewählten Filter
  // In der filter() Funktion überprüfen wir beide Filterkriterien
  const filteredProducts = products.filter((product: Product) => {
  
    // genderMatches überprüft, ob das Produkt dem Geschlechtsfilter entspricht
    // Wenn der Geschlechtsfilter "Alle" ist, wird true zurückgegeben
    const genderMatches = selectedGenderFilter === "Alle" || product.categories.find(category => category.category_level === 2)?.category_url_key === selectedGenderFilter;
    // colourMatches überprüft, ob das Produkt dem Farbfilter entspricht
    const colourMatches = selectedColourFilter === "Alle" || product.colour === selectedColourFilter;

    // Gleichzeitige Filterung nach category_url_key und colour. 
    // Nur Produkte, die beide Filterkriterien erfüllen, werden angezeigt.
    return genderMatches && colourMatches;
  });

  // Reset-Funktion, um die Filter zurückzusetzen
  // Setzt beide States auf "Alle" zurück
  const resetFilters = () => {
    setSelectedGenderFilter("Alle");
    setSelectedColourFilter("Alle");
  };

  // Router importieren
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-4 pb-8">
      <p>Filter</p>
        {/* Filter-Buttons by gender*/}
        <FilterButton filter="Alle" setFilter={setSelectedGenderFilter} label="Alle" />
        <FilterButton filter="men" setFilter={setSelectedGenderFilter} label="Männer" />
        <FilterButton filter="women" setFilter={setSelectedGenderFilter} label="Frauen" />
      </div>

      <div className="flex gap-4 pb-8">
      <p>Farbe</p>
        {colours.map((colour, index) => (
          <FilterButton key={index} filter={colour} setFilter={setSelectedColourFilter} label={colour} />
        ))}
        
      </div>
      {/* Reset-Button */}
      <button onClick={resetFilters}>Filter zurücksetzen</button>

      <div className="grid grid-cols-3 gap-4">
        {/* Anzeige der gefilterten Produkte */}
        {filteredProducts.map((product: { colour: string; uid: string; image: { url: string; label: string }; name: string; price: number }) => (
          <div key={product.uid} onClick={() => router.push(`/dynamic-routing/product/${product.uid}`)}>
            <div>
              <Image src={product.image.url} alt={product.image.label} width={100} height={100} />
              <div>{product.name}</div> 
              <div>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
