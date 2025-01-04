// app/(main)/profile/[id]/page.tsx

// Định nghĩa IProps để tương thích với kiểu mà Next.js mong đợi
interface IProps {
  params: {
    id: string;
  };
}

// Hàm generateStaticParams để xác định các tham số động (id)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },  // Thêm các id khác mà bạn muốn tạo trang tĩnh cho chúng
  ];
}

export default function User({ params }: IProps) {
  const { id } = params;
  return (
    <div>
      User ID: {id}
    </div>
  );
}
