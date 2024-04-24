import React, {useState} from "react";
import axios from "axios";

function CreatePost() {
  const [formData, setFormData] = useState({
    postName: "",
    category: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formWithFiles = new FormData();
      formWithFiles.append("image", selectedFile);
      formWithFiles.append("postName", formData.postName);
      formWithFiles.append("category", formData.category);
      formWithFiles.append("description", formData.description);

      const response = await axios.post(
        "http://localhost:3000/api/v1/post/createPost",
        formWithFiles,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      // Clear form data after successful submission
      setFormData({
        postName: "",
        category: "",
        description: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          className="border rounded-lg py-2 px-4 block w-full mb-4"
          type="text"
          name="postName"
          value={formData.postName}
          onChange={handleChange}
          placeholder="Enter Post Name"
        />
        <input
          className="border rounded-lg py-2 px-4 block w-full mb-4"
          type="file"
          name="image"
          onChange={handleFileChange}
          accept="image/*"
          placeholder="Select Image"
        />
        <input
          className="border rounded-lg py-2 px-4 block w-full mb-4"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter Category"
        />
        <textarea
          className="border rounded-lg py-2 px-4 block w-full mb-4"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          rows="4"
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
