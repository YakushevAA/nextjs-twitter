import { useRouter } from "next/navigation";

const NewPostForm: React.FC = () => {
  const router = useRouter();
  return (
    <form>
      <textarea
        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none"
        rows={4}
        placeholder="What's happening?"
      ></textarea>
      <button
        type="submit"
        className="w-full mt-3 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Post
      </button>
      <button
        onClick={() => router.back()}
        className="w-full bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
      >
        Cancel
      </button>
    </form>
  )
}

export default NewPostForm;
