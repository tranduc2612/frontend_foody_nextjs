// "use client";

export function generateStaticParams() {
  return [{ id: "test" }];
}

export default function User() {
  return <div>User ID: </div>;
}
