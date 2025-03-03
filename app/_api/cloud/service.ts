import uploadClient from "@/app/_axios/upload";

export const uploadImageAWS = async (file: FormData): Promise<any> => {
  const res = uploadClient<any>(`/aws/upload`, {
    method: "POST",
    data: file,
  });
  return res;
};
