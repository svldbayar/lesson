import Image from "next/image";

export default function GalleryPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Image src="/images/mountain.jpg" alt="Mountain" width={300} height={200}/>
        <Image src="/images/city.jpg" alt="City" width={300} height={200} />
        <Image src="/images/nature.jpg" alt="Nature" width={300} height={200} />
      </div>
    </div>
  );
}
