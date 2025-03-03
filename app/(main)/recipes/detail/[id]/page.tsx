// Sử dụng 'use client' nếu muốn sử dụng React hooks trong component
// "use client";

export function generateStaticParams() {
  return [{ id: "test" }];
}

export default function Page({ params }: { params: { id: string } }) {
  // Lấy tham số id từ params
  const { id } = params;

  return <p>Recipe Slug: {id}</p>;
}
