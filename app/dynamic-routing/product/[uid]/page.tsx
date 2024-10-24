import Image from 'next/image';

// TODO: Error in Terminal when navigating to product page
// getProduct ist eine asynchrone Funktion. Das bedeutet, dass sie Daten asynchron aus einer API oder einer anderen Quelle abruft.
async function getProduct(uid: string) {
  // fetch ist eine asynchrone Funktion, die Daten von einer URL abruft.
  // Wir rufen die API auf und übergeben den uid als Parameter.
  // uid ist der eindeutige Identifikator für das Produkt, der in der URL verwendet wird.
  const res = await fetch(`https://tryout-api.vercel.app/api/product/${uid}`);
  if (!res.ok) {
    // Wenn die Antwort nicht ok ist, werfen wir einen Fehler.
    throw new Error("Failed to fetch product");
  }
  // Wir konvertieren die Antwort in JSON und geben das Ergebnis zurück.
  return res.json();
}

// ProductDetail ist eine asynchrone Funktion, die ein Produkt basierend auf einem uid aus der URL abruft.
export default async function ProductDetail({ params }: { params: { uid: string } }) {
  // Await the params object before using it
  const { uid } = params;
  // Wir rufen die getProduct Funktion auf und übergeben den uid aus der URL als Parameter.
  // Das Ergebnis wird in der product Variable gespeichert.
  const product = await getProduct(uid);

  return (
    // Wir geben ein div zurück, das das Produkt anzeigt.
    <div>
      <h1>{product.name}</h1>
      <p>Farbe: {product.colour}</p>
      <p>Preis: {product.price}</p>
      <Image src={product.image.url} alt={product.image.label} width={400} height={400} />
    </div>
  );
}
