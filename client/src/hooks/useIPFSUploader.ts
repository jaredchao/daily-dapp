export async function uploadToIPFS(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_IPFS_API}/add`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    return {
      cid: data.Hash,
      url: `https://ipfs.infura.io/ipfs/${data.Hash}`
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}
