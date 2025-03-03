import uploadClient from "@/app/_axios/upload";

export const uploadImageAWS = async (file: FormData): Promise<string> => {
  const res = uploadClient<string>(`/aws/upload`, {
    method: "POST",
    data: file,
  });
  return res;
};
