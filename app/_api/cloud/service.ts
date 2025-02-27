import uploadClient from "@/app/_axios/upload"

export const uploadImageAWS = async (file: Blob): Promise<any> => {
    const res = uploadClient<any>(`/upload`, {
        method: 'POST',
        data: file
    })
    return res
}