import axios from "axios";

export const imageUpload = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB_host_key}`;

    const { data } = await axios.post(image_API_URL, formData);

    return data.data.url; 
  } catch (error) {
    console.log("Image upload failed:", error);
    return null;
  }
};

// save or update user in db
export const saveOrUpdateUser = async(userData) => {
  const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/user`, userData)
  return data
}
