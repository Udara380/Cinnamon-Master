// utils/uploadToImgBB.js

export const uploadToImgBB = async (imageUri, apiKey) => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    name: 'upload.jpg',
    type: 'image/jpeg',
  });

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error('Image upload failed');
  }

  return data.data.url;
};
