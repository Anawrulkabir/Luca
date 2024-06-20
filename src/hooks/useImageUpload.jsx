import { useState } from 'react'
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useImageUpload = () => {
  const queryClient = useQueryClient()
  const [selectedFiles, setSelectedFiles] = useState([])
  const [uploadedUrls, setUploadedUrls] = useState([])

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files)
  }

  const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('image', file)

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
      // {
      //   params: {
      //     key: apiKey,
      //   },
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // }
    )

    return response.data.data.url
  }

  const mutation = useMutation((file) => uploadImage(file), {
    onMutate: () => {
      // Optionally show some loading indicator
    },
    onSuccess: (data) => {
      setUploadedUrls((prev) => [...prev, data])
      queryClient.invalidateQueries('uploadedImages')
    },
    onError: (error) => {
      console.error('Error uploading image:', error)
    },
  })

  const handleUpload = () => {
    Array.from(selectedFiles).forEach((file) => {
      mutation.mutate(file)
    })
  }

  return {
    selectedFiles,
    uploadedUrls,
    handleFileChange,
    handleUpload,
    isUploading: mutation.isLoading,
  }
}

export default useImageUpload
